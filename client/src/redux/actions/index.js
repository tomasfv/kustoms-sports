import axios from 'axios';


const URL="/"

export const types={
    CHANGE_THEME:"CHANGE_THEME",
    GET_DETAILS :"GET_DETAILS",
    GET_CATEGORY: "GET_CATEGORY",
    CLEAR_CATEGORY: "CLEAR_CATEGORY",
    GET_STOCK:"GET_STOCK",
    GET_NAVBAR:"GET_NAVBAR",
    GET_BY_DATE:"GET_DATE",
    GET_ALL_PROD:"GET_ALL_PROD",
    FILTER:"FILTER",
    DASH_FILTER:"DASH_FILTER",
    POST_USER: "POST_USER",
    POSTDATABUY:"POSTDATABUY",
    GET_PRODUCTINFO:"GET_PRODUCTINFO",
    GET_DELETEPRODUCT:"GET_DELETEPRODUCT",
    GET_COMMENTS:"GET_COMMENTS",
    POSTCOMMENT:"POSTCOMMENT",
    GET_ALLOWED:"GET_ALLOWED",
    GET_DASHUSER:"GET_DASHUSER",
    GET_USER_COMMENTS: "GET_USER_COMMENTS",
    GET_USER_CARTS: "GET_USER_CARTS",
    POSTADDPRODUCT:"POSTADDPRODUCT",
    GET_VIEWSCARROUSEL: "GET_VIEWSCARROUSEL",
    GET_ALL_USERS: "GET_ALL_USERS",
    GET_SOLD: "GET_SOLD",
    UPDATE_BAN_USER: "UPDATE_BAN_USER",
    DASH_POST:"DASH_POST",
    UPDATE_USER:"UPDATE_USER",
    GET_ALLSTOCK:"GET_ALLSTOCK",
    DASH_GET_DETAILS: "DASH_GET_DETAILS",
    DASH_ID:"DASH_ID",
    DASH_GET_STOCK:"DASH_GET_STOCK",
    GET_FINANCE: "GET_FINANCE",
    
    
}


export const changeTheme=(payload)=>{
    return ({
        type:types.CHANGE_THEME,
        payload:payload
    })
}

export function getDetailId(id, email) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`${URL}${id}?email=${email}`);
        return dispatch({
          type: types.GET_DETAILS,
          payload: json.data[0],
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
export function DashgetDetailId(id) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`${URL}${id}` + "?email=undefined");
        return dispatch({
          type: types.DASH_GET_DETAILS,
          payload: json.data[0],
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export const dashId=(payload)=>{
    console.log("payload", payload)
    return{
      type: types.DASH_ID,
      payload:payload
    }
  }
export function getStock(id, email) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`${URL}${id}?email=${email}`);
        return dispatch({
          type: types.GET_STOCK,
          payload: json.data[1],
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
export function dashgetStock(id, email) {
    return async function (dispatch) {
      try {
        var json = await axios.get(`${URL}${id}` + "?email=undefined");
        return dispatch({
          type: types.DASH_GET_STOCK,
          payload: json.data[1],
        });
      } catch (error) {
        console.log(error);
      }
    };
  }

export function getAllStock(id, email) {
  return async function (dispatch) {
    try {
      var json = await axios.get(`${URL}dashboard/productos`);
      return dispatch({
        type: types.GET_ALLSTOCK,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

  export const getByCategory=(category, value)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}?${category}=${value}`)
        return dispatch({
          type: types.GET_CATEGORY,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getUserComments=(email)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}profile/getcommemail?email=${email}`)
        return dispatch({
          type: types.GET_USER_COMMENTS,
          payload: response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getUserCarts=(email)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}profile/getclosecart?email=${email}`)
        return dispatch({
          type: types.GET_USER_CARTS,
          payload: response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getAllUsers=()=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}dashboard/usersadmin`)
        return dispatch({
          type: types.GET_ALL_USERS,
          payload: response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export let updateBanUser = (email) => {
    
    return async function (dispatch) {
      try {
        var jsonUser = await axios.post(`${URL}dashboard/banUser?email=${email}`);
        console.log('JASON ACTION: ',jsonUser.data)
        return {

          type: types.UPDATE_BAN_USER,
          payload: jsonUser.data
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
  export let updateUser = (email) => {
    
    return async function (dispatch) {
      try {
        var jsonUser = await axios.post(`${URL}dashboard/upgUser?email=${email}`);
        console.log('JASON ACTION: ',jsonUser.data)
        return {

          type: types.UPDATE_USER,
          payload: jsonUser.data
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
  export const getByDate=()=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}date`)
        return dispatch({
          type: types.GET_BY_DATE,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getAllProd=()=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}dashboard/getprod`)
        return dispatch({
          type: types.GET_ALL_PROD,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getNavData=()=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}navbar`)
        return dispatch({
          type: types.GET_NAVBAR,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getProductInfo=(email)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}getDatacarrito?email=${email}`)
        return dispatch({
          type: types.GET_PRODUCTINFO,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getComments=(nameproduct,gender)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}getcomments?name=${nameproduct}&gender=${gender}`)
        return dispatch({
          type: types.GET_COMMENTS,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getAllowed=(email,name,gender)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}allowed?email=${email}&name=${name}&gender=${gender}`)
        return dispatch({
          type: types.GET_ALLOWED,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const getDashUser=(email)=>{
    return async (dispatch)=>{
      try {
        let response= await axios.get(`${URL}userdata?email=${email}`)
        return dispatch({
          type: types.GET_DASHUSER,
          payload:response.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  
  export const filterProducts=(payload)=>{
    return{
      type: types.FILTER,
      payload
    }
  }
  export const dashfilterProducts=(payload)=>{
    return{
      type: types.DASH_FILTER,
      payload
    }
  }
  export const clearCategory=()=>{
    return{
      type: types.CLEAR_CATEGORY
    }


  }
  
  export const createnewuser = (payload) => {
    return async function (dispatch) {
      try {
        var json = await axios.post(`${URL}user`, payload);
        return json
      } catch (error) {
        console.log(error);
      }
    };

  }
  export const dashComment = (id) => {
    console.log(id)
    return async function (dispatch) {
      try {
        var json1= await axios.post(`${URL}dashboard/banComment?id=${id} `);
        console.log(json1.data,"json")
        return  {type:types.DASH_POST,
          payload:json1.data}
      } catch (error) {
        console.log(error);
      }
    };

  }
  export const postDataBuy = (info) => {
    console.log("addtocart:",info)
    return async function (dispatch) {
      try {
        var jsonbuy = await axios.post(`${URL}addTocart`, info);
        console.log(jsonbuy.data)
        return {

          type:types.POSTDATABUY,
          payload:jsonbuy.data
        }
      } catch (error) {
        console.log(error);
      }
    };

  }
  export const postAddProduct = (payload) => {
    
    return async function (dispatch) {
      try {
        var json = await axios.post(`${URL}dashboard/adminpostproduct`, payload);
        console.log(json)
        return {

          type:types.POSTADDPRODUCT,
          payload:json.data
        }
      } catch (error) {
        console.log(error);
      }
    };

  }
  export const postComment = (info) => {
    
    return async function (dispatch) {
      try {
        var jsonbuy = await axios.post(`${URL}addcomment`, info);
        console.log(jsonbuy.data)
        return {

          type:types.POSTCOMMENT,
          payload:jsonbuy.data
        }
      } catch (error) {
        console.log(error);
      }
    };

  }
  export const deleteProduct=(email,id)=>{
    return async function (dispatch){
      
        let response= await axios.put(`${URL}delFromcart?email=${email}&id=${id}`)
        return dispatch({
          type: types.GET_DELETEPRODUCT,
          payload:response
        })
      
    }
  }
export const visitedcarrousel = (email)=>{

  return async function (dispatch){
try{
    let userviews = await axios.get(`${URL}dashboard/carrouselview?email=${email}`)
    console.log("batman",userviews)
  return dispatch({
    type : types.GET_VIEWSCARROUSEL,
    payload: userviews.data
   })
  }catch(e){console.log(e)}
  }
}

export const bestsold = () => {
  return async function (dispatch){
    try {
      let sold = await axios.get(`${URL}dashboard/bestsold`)
      return dispatch({
        type : types.GET_SOLD,
        payload: sold.data
       })
    } catch (e) {
      {console.log(e)}
    }
  }
}
export const getfinance = () =>{
return async function (dispatch){
  try {
    let finances = await axios.get(`${URL}dashboard/financial`)
    return dispatch({
      type: types.GET_FINANCE,
      payload: finances.data
    })
  } catch (e) {
    {console.log(e)}
    
  }
}

}
