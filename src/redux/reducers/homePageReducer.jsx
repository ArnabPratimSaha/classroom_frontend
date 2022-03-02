const homePageReducer = (state = {
    page:1,
    hasMoreData:true,
    query:'',
    classes:[]
}, action) => {
    switch(action.type){
        case 'ADD': {
            return {
                page: state.page+1,
                query:action.payload.query,
                hasMoreData: action.payload.hasMoreData,
                classes: [...state.classes,action.payload.classes]
            };
        }
        case 'UPDATE':{
            return {
                page: action.payload.page,
                query:action.payload.query,
                hasMoreData: action.payload.hasMoreData,
                classes: action.payload.classes
            }
        }
        case 'CLEAR': {
            return {
                page: 1,
                hasMoreData: action.payload.hasMoreData,
                query:'',
                classes: []
            };
        }
        default : {
            return state;
        }
    }
}
export default homePageReducer;