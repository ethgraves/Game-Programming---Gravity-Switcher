class Events {
    static eventListeners = []

    static addEventListener(type, listenerClass){
        Events.eventListeners.push({type, listenerClass})
    }

    static handleEvent(type, event){
        for(let eventListener of Events.eventListeners){
            if(eventListener.type == type){
                eventListener.listenerClass.handleEvent(type, event)
            }
        }
    }
}