const userReducer = (state = {
    isLoggedIn:false,
    accessToken:null,
    refreshToken:null,
    id:null,
    user:{}
}, action) => {
    switch(action.type){
        case 'LOGIN': {
            return {
                isLoggedIn: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken,
                id: action.payload.id,
                user: action.payload.user
            };
        }
        case 'LOGOUT': {
            return {
                isLoggedIn: false,
                accessToken: null,
                refreshToken: null,
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