const login=(data)=>{
    if(data.id && data.accesstoken && data.refreshtoken)
    return {
        type:"LOGIN",
        payload:{
            accesstoken:data.accesstoken,
            refreshtoken:data.refreshtoken,
            id:data.id,
            user:data.user
        }
    }
}
const logout=()=>{
    return {
        type:"LOGOUT"
    }
}
export default login
export {login,logout}