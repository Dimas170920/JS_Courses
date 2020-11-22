module.exports = {

    subscribers: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (subscriber === undefined) {
            return this;
        }else{
            if(!this.subscribers.hasOwnProperty(event)){
                this.subscribers[event] = [];
            }
            this.subscribers[event].push({
                    subscriber: subscriber,
                    handler: handler.bind(subscriber)
                });
            return this;
        }
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if(this.subscribers[event] == undefined){
            return this;
        }else if(this.subscribers.hasOwnProperty(event) && subscriber === undefined){
            this.subscribers[event].splice(0,this.subscribers[event].length);
            return this;
        }else{
            if(this.subscribers.hasOwnProperty(event)){
                for (var i = this.subscribers[event].length - 1; i >= 0; i--){
                    if(this.subscribers[event][i].subscriber === subscriber){
                        this.subscribers[event].splice(i , 1);
                    }
                }
                return this;
            }
        }

    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if(this.subscribers[event] != undefined){
            if(this.subscribers[event].length > 0){
                for (var i = 0; i < this.subscribers[event].length; i++){
                    this.subscribers[event][i].handler();
                }
            }
        }
        return this;
    }
};
