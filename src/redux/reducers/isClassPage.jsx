const isClassPageReducer = (state = false, action) => {
    switch(action.type){
        case 'ON_CLASS_PAGE' : {
            return true;
        }
        case 'OFF_CLASS_PAGE' : {
            return false;
        }
        default : {
            return state;
        }
    }
}
export default isClassPageReducer;