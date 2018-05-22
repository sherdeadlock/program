(function() {
'use strict';
Ext.ns('qnap.func');


// =========================================================================
// region Queue
// =========================================================================

// https://github.com/stefanpenner/es6-promise
function ajaxRequestPromise(options) {
    return new Promise((resolve, reject) => {
        Ext.apply(options, {
            callback(options, success, response) {
                if (success) {
                    resolve(response);
                }
                else {
                    reject(response);
                }
            }
            // success(response, options) {
            //     resolve(response);
            // },
            // failure(response, options) {
            //     reject(response);
            // },
        });
        Ext.Ajax.request(options);
    });
}


function queueWorker(queue, tasks, next) {
    console.log('tasks', tasks);
    if (tasks.length === 2) {
        // synchronize ajax result
        Promise.all([
            ajaxRequestPromise({url: `fixtures/users${tasks[0].id}.json`}),
            ajaxRequestPromise({url: `fixtures/users${tasks[1].id}.json`}),
        ])
        .then(results => {
            console.log('success', results);
        })
        .catch(error => {
            console.error('failure', error);
        })
        .then(() => {
            next();
        });
    } else{
        console.log(queue.length(), tasks);
        next();
    }
}


function oneByOneWorker(tasks) {
    console.log(`send requesst ${tasks[0]}`);
    return ajaxRequestPromise({url: `fixtures/users${tasks[0]}.json`})
        .then(result => {
            console.log(`success ${tasks[0]}`, result);
        })
        .catch(error => {
            console.log(`failure ${tasks[0]}`, error);
        });
}

// endregion Queue


// =========================================================================
// region Store.load
// =========================================================================

var store = new Ext.data.Store({
    url: 'fixtures/users.json',
    autoLoad: true,
    reader: qnap.fixtures.userReader,
});

var store2 = new Ext.data.Store({
    url: 'xxx.json',
    reader: qnap.fixtures.userReader,
});


function loadPromise(store, options) {
    return new Promise((resolve, reject) => {
        options = Ext.apply(options || {}, {
            callback(records, options, success) {
                if (success) {
                    resolve(records);
                } else {
                    reject(options);
                }
            },
        });

        store.load(options);
    })
}

// endregion Queue


function timeout(task, milliseconds) {
    var timeoutID;
    var promise = task().then(function(result) {
        clearTimeout(timeoutID);
        return result;
    });

    return Promise.race([
        promise,
        new Promise(function(resolve, reject) {
            timeoutID = setTimeout(function() {
                reject();
            }, milliseconds);
        })
    ]);
}

function testTimeoutSuccess() {
    function task() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve('success');
            }, 2000);
        });
    }

    timeout(task, 3000)
    .then(function(result) {
        console.log('1. success', result);
    })
    .catch(function(error) {
        console.log('1. failure', error);
    });
}

function testTimeoutFailure() {
    timeout(function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log('success job');
                resolve('success');
            }, 4000);
        });
    }, 3000)
    .then(function(result) {
        console.log('2. success', result);
    })
    .catch(function(error) {
        console.log('2. failure', error);
    });
}


var panel = new Ext.Panel({
    count: 0,

    onLoadSuccess(records, options, success) {
        loadPromise(store)
        .then(function(records) {
            console.log('load success', records);
        })
        .catch(function(error) {
            console.log('load failure', error);
        });
    },

    onLoadFailure() {
        loadPromise(store2)
        .then(function (records) {
            console.log('load success', records);
        })
        .catch(function (error) {
            console.log('load failure', error);
        });
    },

    onAddQueue() {
        this.queue.push([{
            id: this.count++
        }, {
            id: this.count++
        }]);
    },

    onOneByOneQueue() {
        this.queue2.push([1, 2, 3, 4, 5, 6, 7]);
    },

    onTimeoutSuccess() {
        testTimeoutSuccess();
    },

    onTimeoutFailure() {
        testTimeoutFailure();
    },

    items: [
        {
            xtype: 'button',
            text: 'Load Store Success',
            ref: 'loadSuccessBtn',
        },
        {
            xtype: 'button',
            text: 'Load Store Failure',
            ref: 'loadFailureBtn',
        },
        {
            xtype: 'button',
            text: 'Add Queue',
            ref: 'addQueue',
        },
        {
            xtype: 'button',
            text: 'Start One By One Queue',
            ref: 'oneByOneQueueBtn',
        },
        {
            xtype: 'button',
            text: 'test timeout',
            ref: 'testTimeoutBtn',
        },
        {
            xtype: 'button',
            text: 'test timeout failure',
            ref: 'testTimeoutFailureBtn',
        },
    ],

    listeners: {
        afterrender(self) {
            self.queue = new qnap.util.Queue(queueWorker, 1, 2);
            self.queue2 = new qnap.util.Queue(oneByOneWorker, 1, 1);

            // bind events
            self.loadSuccessBtn.setHandler(self.onLoadSuccess, self);
            self.loadFailureBtn.setHandler(self.onLoadFailure, self);
            self.addQueue.setHandler(self.onAddQueue, self);
            self.oneByOneQueueBtn.setHandler(self.onOneByOneQueue, self);
            self.testTimeoutBtn.setHandler(self.onTimeoutSuccess, self);
            self.testTimeoutFailureBtn.setHandler(self.onTimeoutFailure, self);
        },
    },
});


qnap.func.queue = panel;

}());
