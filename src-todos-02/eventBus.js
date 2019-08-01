const eventBus={}
//listenerContainers={eventName1:[listener1,listener2],eventName2:[listener3]}
let listenerContainers={}
eventBus.$on=function (eventName,listener) {
    //取出对应的存储listener的数组
    let linsteners=listenerContainers[eventName]
    if(!linsteners){
        listenerContainers[eventName]=linsteners=[]
    }
    linsteners.push(listener)
}
eventBus.$emit=function (eventName,data) {
    let listeners=listenerContainers[eventName]
    if(listeners&&listeners.length>0){
        listeners.forEach(listener => {
           listener(data) 
        });
    }
}
eventBus.$off=function (eventName) {
    if(eventName===undefined||eventName===null){
        listenerContainers={}
    }else{
        listenerContainers[eventName]=[]
    }
}
export default eventBus
eventBus.$on('add', (data) => {
    console.log('add', data)
  })
  eventBus.$on('add', (data) => {
    console.log('add2', data)
  })
  eventBus.$on('delete', (data) => {
    console.log('delete', data)
  })
  
  // eventBus.off('add')
  // eventBus.off()
  
  eventBus.$emit('add', 'atguigu')
  eventBus.$emit('delete', 'xxxx')