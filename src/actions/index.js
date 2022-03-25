// all actions here in app 
export const incNumber = (num) => {
    return {
        type: 'INCREAMENT',
        payload: num
    } 
}

export const decNumber = () => {
    return {
        type: 'DECREAMENT'
    } 
}