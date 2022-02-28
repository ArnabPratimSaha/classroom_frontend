const userReducer = (state = {
    isLoggedIn:false,
    accesstoken:null,
    refreshtoken:null,
    id:null,
    user:{}
}, action) => {
    switch(action.type){
        case 'LOGIN': {
            return {
                isLoggedIn: true,
                accesstoken: action.payload.accesstoken,
                refreshtoken: action.payload.refreshtoken,
                id: action.payload.id,
                user: action.payload.user
            };
        }
        case 'LOGOUT': {
            return {
                isLoggedIn: false,
                accesstoken: null,
                refreshtoken: null,
                id: null,
                user: {}
            };
        }
        default : {
            return state;
        }
    }
}
export default userReducer;