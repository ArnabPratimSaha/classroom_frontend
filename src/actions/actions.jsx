const classPage = (bool) => {
    return{
        type : bool ? 'ON_CLASS_PAGE' : 'OFF_CLASS_PAGE'
    }
}


export { classPage }