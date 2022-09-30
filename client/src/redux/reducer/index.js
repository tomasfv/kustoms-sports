import { types} from "../actions";


const initialState={
    theme:"light",
    details:[],
    images:[],
    productByCategory:[],
    navData:{},
    stock:[],
    color:{},
    newest:[],
    filteredProducts:[],
    cacheNotFiltered:[],
    dataBuy:[],
    data:[],
    comments:[],
    userCom:[],
    nameComments:[],
    allowed:"",
    dashUser:"",
    profileCom:[],
    profileCarts:[],
    viewscarrousel: [],

    
    
    dashproducts: [],

    allUsers:[],
    sold:[],
    
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
        case types.DASH_POST:
            return{
                ...state
            }
        case types.GET_USER_COMMENTS:
            return{
                ...state,
                profileCom: action.payload,
            }    
        case types.GET_USER_CARTS:
            return{
                ...state,
                profileCarts: action.payload,
            }

        case types.GET_ALL_PROD:
                return{
                    ...state,
                    dashproducts: action.payload
                }
        case types.GET_ALL_USERS:
            return{
                ...state,
                allUsers: action.payload,
            }
        case types.UPDATE_BAN_USER:
            return{
                ...state
            }
            case types.UPDATE_USER:
            return{
                ...state
            }
        case types.GET_ALLOWED:
            return{
                ...state,
                allowed:action.payload

            }
        case types.POSTCOMMENT:
            return{
                ...state
            }
            case types.GET_SOLD:
                return{
                    ...state,
                    sold: action.payload,
                } 
        case types.POSTADDPRODUCT:
            return{
                ...state
            }
        case types.POST_USER:
            return{
                ...state
                       }
        case types.GET_DASHUSER:
            return{
                ...state,
                dashUser:action.payload
            }
        case types.GET_DETAILS:
            return{
                ...state,
                details:action.payload,
                images:action.payload.image.map(e=>e)
            }
        case types.GET_CATEGORY:
            return{
                ...state,
                productByCategory:action.payload
            }
        case types.GET_BY_DATE:
            return{
                ...state,
                newest:action.payload
            }
         case types.GET_VIEWSCARROUSEL:
            return{
                ...state,
                viewscarrousel:action.payload
            }
            case types.GET_DELETEPRODUCT:
            return{
                ...state,
                
            }
        case types.CLEAR_CATEGORY:
            return{
                ...state,
                productByCategory:[]
            }
        case types.GET_STOCK:
                return{
                    ...state,
                    stock:action.payload.map(d=>d),
                    color:action.payload[0]
                }   
        case types.GET_NAVBAR:
                return{
                    ...state,
                    navData:action.payload
                }
        case types.GET_COMMENTS:
            const texts = action.payload.map(e=>[e.texto, e.rank])
            const user= action.payload.map(l=>l.user)
            return{
                ...state,
                comments:texts,
                userCom:user,
                
            }
        case types.POSTDATABUY:
            console.log(action.payload)
            return{
                ...state,
                
            }
        case types.GET_PRODUCTINFO:
            const images = action.payload.products.map(e=>{return(e.image[0])})
            
            return{
                ...state,
                dataBuy:action.payload.products,
                imageCarrito:images,
                data:action.payload
            }
        case types.GET_USER_COMMENTS:
            return{
                ...state,
                profileCom: action.payload,
            }    
        case types.GET_USER_CARTS:
            return{
                ...state,
                profileCarts: action.payload,
            } 
        case types.FILTER:
            let filter=action.payload
            let toFilter=state.productByCategory
            let finalShow=[]
            if(filter.brand==='all' && filter.clotheType==='all' && filter.collection==='all' && filter.gender==='all' && filter.color==='all' /* && filter.size==='all' */ && filter.sport==='all'){
                return {
                    ...state,
                    filteredProducts:false
                }
            } else{
                let empty=false
                const checker=()=>{
                    if(finalShow.length===0) empty=true
                }
                    if (filter.brand!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.brand===filter.brand)
                        } else{
                            finalShow=toFilter.filter(e=> e.brand===filter.brand)
                        }
                        checker()
                    } 
                    if (filter.clotheType!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.clotheType===filter.clotheType)
                        } else{
                            finalShow=toFilter.filter(e=> e.clotheType===filter.clotheType)
                        }
                        checker()
                    } 
                    if (filter.collection!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.collection===filter.collection)
                        } else{
                            finalShow=toFilter.filter(e=> e.collection===filter.collection)
                        }
                        checker()
                    } 
                    if (filter.gender!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.gender===filter.gender)
                        } else{
                            finalShow=toFilter.filter(e=> e.gender===filter.gender)
                        }
                        checker()
                    } 
                    if (filter.color!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.color===filter.color)
                        } else{
                            finalShow=toFilter.filter(e=> e.color===filter.color)
                        }
                        checker()
                    } 
                    /* if (filter.size!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.size===filter.size)
                        } else{
                            finalShow=toFilter.filter(e=> e.size===filter.size)
                        }
                        checker()
                    }  */
                    if (filter.sport!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.sport===filter.sport)
                        } else{
                            finalShow=toFilter.filter(e=> e.sport===filter.sport)
                        }
                        checker()
                    } 

                if(empty===true){
                    return{
                        ...state,
                        filteredProducts:['vacio']
                    }
                } else{
                    return{
                        ...state,
                        filteredProducts:finalShow
                    }
                    
                }
                // return{
                //     ...state,
                //     filteredProducts:finalShow
                // }
            }
            case types.DASH_FILTER:
            let dashfilter=action.payload
            let dashtoFilter=state.dashproducts
            let dashfinalShow=[]
            if(dashfilter.brand==='all' && dashfilter.clotheType==='all' && dashfilter.collection==='all' && dashfilter.gender==='all' && dashfilter.color==='all' /* && filter.size==='all' */ && dashfilter.sport==='all'){
                return {
                    ...state,
                    dashfilteredProducts:false
                }
            } else{
                let empty=false
                const checker=()=>{
                    if(dashfinalShow.length===0) empty=true
                }
                    if (dashfilter.brand!=='all'){
                        if(dashfinalShow.length){
                            dashfinalShow=dashfinalShow.filter(e=> e.brand===dashfilter.brand)
                        } else{
                            dashfinalShow=dashtoFilter.filter(e=> e.brand===dashfilter.brand)
                        }
                        checker()
                    } 
                    if (dashfilter.clotheType!=='all'){
                        if(dashfinalShow.length){
                            dashfinalShow=dashfinalShow.filter(e=> e.clotheType===dashfilter.clotheType)
                        } else{
                            dashfinalShow=dashtoFilter.filter(e=> e.clotheType===dashfilter.clotheType)
                        }
                        checker()
                    } 
                    if (dashfilter.collection!=='all'){
                        if(dashfinalShow.length){
                            dashfinalShow=dashfinalShow.filter(e=> e.collection===dashfilter.collection)
                        } else{
                            dashfinalShow=dashtoFilter.filter(e=> e.collection===dashfilter.collection)
                        }
                        checker()
                    } 
                    if (dashfilter.gender!=='all'){
                        if(dashfinalShow.length){
                            dashfinalShow=dashfinalShow.filter(e=> e.gender===dashfilter.gender)
                        } else{
                            dashfinalShow=dashtoFilter.filter(e=> e.gender===dashfilter.gender)
                        }
                        checker()
                    } 
                    if (dashfilter.color!=='all'){
                        if(dashfinalShow.length){
                            dashfinalShow=dashfinalShow.filter(e=> e.color===dashfilter.color)
                        } else{
                            dashfinalShow=dashtoFilter.filter(e=> e.color===dashfilter.color)
                        }
                        checker()
                    } 
                    /* if (filter.size!=='all'){
                        if(finalShow.length){
                            finalShow=finalShow.filter(e=> e.size===filter.size)
                        } else{
                            finalShow=toFilter.filter(e=> e.size===filter.size)
                        }
                        checker()
                    }  */
                    if (dashfilter.sport!=='all'){
                        if(dashfinalShow.length){
                            dashfinalShow=dashfinalShow.filter(e=> e.sport===dashfilter.sport)
                        } else{
                            dashfinalShow=dashtoFilter.filter(e=> e.sport===dashfilter.sport)
                        }
                        checker()
                    } 

                if(empty===true){
                    return{
                        ...state,
                        dashfilteredProducts:['vacio']
                    }
                } else{
                    return{
                        ...state,
                        dashfilteredProducts:dashfinalShow
                    }
                    
                }
            }
        default: return {...state}
    }


}