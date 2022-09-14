import React from "react";
import { MdExpandMore, MdMenu, MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Link } from "react-router-dom";

const Details = () => {
  const details = useSelector((state) => state.details);
  //const id = props.match.params.id;
   const data = {
    clotheType: "shirt",
    brand:"adidas",
    name:"pelota",
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



  


   


  return (
    <div className="flex flex-col space-x-10 bg-main-light ">
      <div className="flex flex-row mt-[200px] ml-96 space-x-10">
        <div>
          <div><img src={data.image} alt="imagen del product"
            /></div>
          
        </div>
        <div className=" pl-[500px] flex flex-col gap-20">
          <div>NOMBRE DE PRODUCTO</div>
          <div> PRECIO</div>
          <div>DETALLES DEL PRODUCTO</div>
          <div>Size</div>
          <button
            type="button "
            className="flex break-inside bg-[#2ea44f] text-main-light border-2 border-transparent rounded-3xl px-6 py-3 mb-4 w-full"
          >
            <div className="m-auto">
              <div className="flex items-center justify-start flex-1 space-x-4 #f8fafc">
                {/* <svg width='25' height='25' viewBox='0 0 24 24'>
            <path fill='currentColor'
              d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z' />
          </svg> */}
                <span className="font-medium ">Add Carrito</span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <div className=" flex flex-col mt-[100px]">
            <ul className="flex flex-col text-justify">
            <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full ">
                Destacado
                <MdExpandMore />
              </li>
              <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full ">
                Descripcion
                <MdExpandMore />
              </li>
              <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full ">
                Cuidados
                <MdExpandMore />
              </li>
              <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full ">
                Detalles
                <MdExpandMore />
              </li>
            </ul>
          </div>
    </div>
  );
};

export default Details;