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
            success(response, options) {
                resolve(response);
            },
            failure(response, options) {
                reject(response);
            },
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
        .finally(() => {
            next();
        });
    } else{
        console.log(queue.length(), tasks);
        next();
    }
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
    ],

    listeners: {
        afterrender(self) {
            self.queue = new qnap.util.Queue(queueWorker);

            // bind events
            self.loadSuccessBtn.setHandler(self.onLoadSuccess, self);
            self.loadFailureBtn.setHandler(self.onLoadFailure, self);
            self.addQueue.setHandler(self.onAddQueue, self);
        },
    },
});


qnap.func.queue = panel;

}());
