import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import  Payment  from './Payment'
import { getProductInfo } from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";






const Carrito = ()=>{
    const { isAuthenticated, user } = useAuth0()
    const dispatch= useDispatch()
    const email = user.email
    useEffect(() => {
        dispatch(getProductInfo(email))
      }, [dispatch,isAuthenticated,user]);
    const databuy = useSelector((state) => state.dataBuy);


   return(
<div className="mt-[800px]">
    <h1>Carrito</h1>
    <div>ddsds{databuy.name}</div>
    <h1>Carrito</h1>
    <h1>Carrito</h1>
    <h1>Carrito</h1>
    <h1>Carrito</h1>
    <Payment/>
</div>
    )

}

export default Carrito