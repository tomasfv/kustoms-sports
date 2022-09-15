import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getdetailid } from "../redux/actions";




const ImageXDataProduct = (props) =>{
    const details = useSelector((state) => state.details);
    //const id = props.match.params.id;
    // const deta = details.infoprod[0]
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getdetailid(64))
    },[dispatch])
    
    const data = {
        clotheType: "shirt",
        brand:"adidas",
        name:"Camiseta selección Argentina",
        gender:"x",
        sport:"futbol",
        collection:"primavera",
        color:"darkred",
        size:"xxl",
        image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/611f58bb7b4444bbb62eaeca012c57dd_9366/Camiseta_Titular_Argentina_22_Blanco_HF1495_01_laydown.jpg",
        stock:"10",
        price:"13000",
        promotion:"0.15"
       }
  return(
    <div className="flex flex-row mt-[100px] ml-36 space-x-10">
        <div>
          <div><img src={details.image} alt="imagen del product" width="550px" height="550px"
            /></div>
          
        </div>
        <div className="flex flex-col gap-10 ">
          <div className=" flex text-[30px] ">{details.name}</div>
          <div className=" flex ml-0 pl-0 "> {data.price}$</div>
          <div className="flex flex-col ">
            <div className="flex">Gender: {data.gender}</div>
            <div className=" flex">Sport: {data.sport}</div>   
            <div className=" flex"> Collection: {data.collection}</div>
            </div>
          <div className="flex">Size</div>
          <button
            type="button "
            className="flex break-inside bg-[#2ea44f] text-main-light border-2 border-transparent  px-6 py-3 mb-4 w-fit h-fit pt-1 pb-1 mt-[200px]"
          >
            <div className="m-auto">
              <div className="flex items-center justify-start flex-1 space-x-4 #f8fafc">
                <span className="font-medium ">Add Carrito</span>
              </div>
            </div>
          </button>
        </div>
      </div>
  )
}

export default ImageXDataProduct