const add=(data)=>{
    if(data.page && data.hasMoreData && data.classes)
    return {
        type:"ADD",
        payload:{
            page:data.page,
            hasMoreData:data.hasMoreData,
            classes:data.classes,
        }
    }
}
const clear=(hasMoreData)=>{
    return {
        type:"CLEAR",
        payload:{
            hasMoreData:hasMoreData
        }
    }
}
const update=(data)=>{
    return{
        type:"UPDATE",
        payload:{
            page:data.page,
            hasMoreData:data.hasMoreData,
            query:data.query,
            classes:data.classes,
        }
    }
}
export default add
export {add,clear,update}