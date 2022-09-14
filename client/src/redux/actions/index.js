import axios from 'axios';

export const types={
    CHANGE_THEME:"CHANGE_THEME",
}


export const changeTheme=(payload)=>{
    return ({
        type:types.CHANGE_THEME,
        payload:payload
    })
}