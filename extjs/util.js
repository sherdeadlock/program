Ext.ns('qnap.util');


qnap.util.loadNS = function (namespace) {
	return namespace.split('.').reduce((module, path) => module[path], window);
};


qnap.util.Queue = function Queue(worker, concurrency, payload) {
    if (concurrency == null) {
        concurrency = 1;
    }
    else if(concurrency === 0) {
        throw new Error('Concurrency must not be zero');
    }

    var numRunning = 0;
    var processingScheduled = false;
    var isProcessing = false;

    function _scheduleProcess() {
        if (!processingScheduled) {
            processingScheduled = true;
            setTimeout(function() {
                processingScheduled = false;
                q.process();
            }, 0);
        }
    }

    function _insert(data, callback) {
        if (callback != null && typeof callback !== 'function') {
            throw new Error('task callback must be a function');
        }
        q.started = true;
        if (!Ext.isArray(data)) {
            data = [data];
        }

        for (var i = 0, l = data.length; i < l; i++) {
            var item = {
                data: data[i],
                callback: callback || Ext.emptyFn
            };

            q._tasks.push(item);
        }

        _scheduleProcess();
    }

    function _next(tasks) {
        return function() {
            numRunning -= 1;

            for (var i = 0, l = tasks.length; i < l; i++) {
                var task = tasks[i];
                task.callback.apply(task, arguments);
            }

            _scheduleProcess();
        };
    }

    var q = {
        _tasks: [],
        concurrency: concurrency,
        payload: payload,
        started: false,
        paused: false,

        push: function(data, callback) {
            _insert(data, callback);
        },
        clear: function() {
            q._tasks.length = 0;
        },
        process: function() {
            if (isProcessing) {
                return;
            }
            isProcessing = true;
            while(!q.paused && numRunning < q.concurrency && q._tasks.length){
                var tasks = [], data = [];
                var l = q._tasks.length;
                if (q.payload) l = Math.min(l, q.payload);
                for (var i = 0; i < l; i++) {
                    var node = q._tasks.shift();
                    tasks.push(node);
                    data.push(node.data);
                }

                numRunning += 1;

                var cb = _next(tasks);
                worker(data, q)
                    .then(function(result) {
                        cb(null, result);  // callbacck success
                    })
                    .catch(function(reason) {
                        cb(reason);  // callback failure
                    });
            }
            isProcessing = false;
        },
        length: function() {
            return q._tasks.length;
        },
        running: function() {
            return numRunning;
        },
        pause: function() {
            q.paused = true;
        },
        resume: function() {
            if (q.paused === false) { return; }
            q.paused = false;

            _scheduleProcess();
        }
    };
    return q;
};

qnap.util.EventMgr = function EventMgr() {
    var me = this;
    var mons = [];

    me.clear = function(){
        Ext.each(mons, function(m){
            m.item.un(m.ename, m.fn, m.scope);
        });
        mons.length = 0;
    };

    me.mon = function(item, ename, fn, scope, opt){
        mons.push({
            item: item, ename: ename, fn: fn, scope: scope
        });
        item.on(ename, fn, scope, opt);
    };

    me.mun = function(item, ename, fn, scope){
        var found, mon;
        for(var i = 0, len = mons.length; i < len; ++i){
            mon = mons[i];
            if(item === mon.item && ename == mon.ename && fn === mon.fn && scope === mon.scope){
                mons.splice(i, 1);
                item.un(ename, fn, scope);
                found = true;
                break;
            }
        }
        return found;
    };
};

qnap.util.humanCompare = (function() {
    function isWhitespace(code) {
        return code <= 32;
    }
    function isDigit(code) {
        return 48 <= code && code <= 57;
    }
    var zero = '0'.charCodeAt(0);

    return function humanCompare(a, b) {
        var ia = 0;
        var ib = 0;
        var ma = a.length;
        var mb = b.length;
        var ca, cb; // character code
        var za, zb; // leading zero count
        var na, nb; // number length
        var bias;

        while (ia < ma && ib < mb) {
            ca = a.charCodeAt(ia);
            cb = b.charCodeAt(ib);
            za = zb = 0;
            na = nb = 0;
            bias = 0;

            // skip over leading spaces
            while (isWhitespace(ca)) {
                ia += 1;
                ca = a.charCodeAt(ia);
            }
            while (isWhitespace(cb)) {
                ib += 1;
                cb = b.charCodeAt(ib);
            }

            // compare digits with other symbols
            if (isDigit(ca) && !isDigit(cb)) {
                return -1;
            }
            if (!isDigit(ca) && isDigit(cb)) {
                return 1;
            }

            // count leading zeros
            while (ca === zero) {
                za += 1;
                ia += 1;
                ca = a.charCodeAt(ia);
            }
            while (cb === zero) {
                zb += 1;
                ib += 1;
                cb = b.charCodeAt(ib);
            }

            // count numbers
            while (isDigit(ca) || isDigit(cb)) {
                if (isDigit(ca) && isDigit(cb) && bias === 0) {
                    if (ca < cb) {
                        bias = -1;
                    } else if (ca > cb) {
                        bias = 1;
                    }
                }
                if (isDigit(ca)) {
                    ia += 1;
                    na += 1;
                    ca = a.charCodeAt(ia);
                }
                if (isDigit(cb)) {
                    ib += 1;
                    nb += 1;
                    cb = b.charCodeAt(ib);
                }
            }

            // compare number length
            if (na < nb) {
                return -1;
            }
            if (na > nb) {
                return 1;
            }

            // compare numbers
            if (bias) {
                return bias;
            }

            // compare ascii codes
            if (ca < cb) {
                return -1;
            }
            if (ca > cb) {
                return 1;
            }

            ia += 1;
            ib += 1;
        }

        // compare length
        if (ma < mb) {
            return -1;
        }
        if (ma > mb) {
            return 1;
        }
    }
}());
