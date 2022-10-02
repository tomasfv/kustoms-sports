import React, {useState} from "react"
import { ProductGallery } from ".";
import {  useEffect } from "react"
import { DashgetDetailId, dashgetStock, DashDelDetail } from "../redux/actions";
import { PreviewCard, Filters } from "./index"
import { useDispatch, useSelector } from "react-redux"
import DashNavBar from "./DashNavBar";
import DashProdGallery from "./DashProdGallery";
import DashCategories from "../views/DashCategory";
import FormMod from "./FormMod";




const ModificarProd = () =>{
    const id = useSelector(state => state.dashid)
    const datos = useSelector(state => state.dashdetails)
    const stock = useSelector(state => state.dashstock)
    const color = useSelector(state => state.dashcolor)

    // const [carga, setCarga] = useState(false)

    console.log("dasdetail",datos) 
    const handleVolver = () => {
        dispatch(DashDelDetail())
        // if (datos.length && stock.length && color.length){
        //     datos = {};
        //     stock = {};
        //     color = {};
        //     // id = 0
        // } 
        // setCarga(!carga)
    }

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(DashgetDetailId(id))
        dispatch(dashgetStock(id))
    },[dispatch, id])
    // const filtering = useSelector(state => state.filteredProducts)
    return(
    <div>
        <div className="absolute top-0 w-[1000px] h-[939px] ">
            
            {datos.name ? <div className="mt-[200px] w-[900px] ml-[30px]">
                <button onClick={handleVolver}>Volver</button>
                <FormMod datos={datos} stock={stock} color={color}/>
                </div>
                :<div className=" "><DashCategories /></div> 
}
        </div>
    </div>
    )
}

export default ModificarProd;