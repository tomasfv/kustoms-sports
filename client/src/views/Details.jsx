import React from "react";


import ImageXDataProduct from "../components/Image&DataProduct";
import SelectoresProduct from "../components/SelectoresProduct";
import { Carrousel } from "../components";

const Details = () => {
  
  return (
    <div className="flex flex-col  bg-main-light w-10/12 mx-auto">
      <ImageXDataProduct />
      <SelectoresProduct/>
      <div className="flex flex-col  mt-[20px]">
        
        <Carrousel/>
      </div>
    </div>
  );
};

export default Details;
