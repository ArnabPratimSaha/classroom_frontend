const login=(data)=>{
    if(data.id && data.accessToken && data.refreshToken)
    return {
        type:"LOGIN",
        payload:{
            accessToken:data.accessToken,
            refreshToken:data.refreshToken,
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