import { useSelector } from "react-redux";
import React from "react";
import  Payment  from './Payment'






const Carrito = ()=>{
    const databuy = useSelector((state) => state.dataBuy);
    console.log(databuy)
   
   
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