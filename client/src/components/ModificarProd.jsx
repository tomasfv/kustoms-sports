import React, {useState} from "react"
import { ProductGallery } from ".";
import {  useEffect } from "react"

import { PreviewCard, Filters } from "./index"
import { useSelector } from "react-redux"
import DashNavBar from "./DashNavBar";
import DashProdGallery from "./DashProdGallery";



const ModificarProd = () =>{
    // const filtering = useSelector(state => state.filteredProducts)
    return(
    <div>
        <div className="w-[1000px] h-[939px] ">
            <div className="flex w-[900px] ml-[180px] mt-["><DashNavBar className=" "/></div>
              <div className="flex  "><DashProdGallery /></div> 
        </div>
    </div>
    )
}

export default ModificarProd;