import { types} from "../actions";


const initialState={
    theme:"light",
    details:[]
}

export const rootReducer=(state=initialState, action)=>{
    switch (action.type){
        case types.CHANGE_THEME:{
            let root=document.getElementById('root')
            if(action.payload==='light'){
                root.classList.remove("dark")
                return {...state, theme:'light'}
            } else{
                root.classList.add("dark")
                return {...state, theme:'dark'}
            }
        }
        case types.GET_DETAILS:
            return{
               ...state,
               details:action.payload
            }

        default: return {...state}
    }

}