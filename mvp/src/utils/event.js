/**
 * 
 */

 class Event {
    constructor(sender){
      this._sender = sender
      this._listener = []
    }

    attach(callback){
      this._listener.push(callback)
    }

    notify(args){
      for(let i = 0;i<this._listener.length;i++){
        this._listener[i](sender.args)
      }
    }
 }

 export default Event