

import { useState } from "react";
import { MdExpandMore} from "react-icons/md";



const SelectoresProduct = () =>{

  const [desplegable, setDesplegable] = useState(false)
   function handleClick(e){
    setDesplegable(!desplegable)
   }
    return(
        <div className=" flex flex-col mt-[100px] ml-16">
        <ul className="flex flex-col text-justify">
          <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full ">
            Destacado
            <MdExpandMore />
          </li>
          <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full ">
            Descripcion
            <MdExpandMore />
          </li>
          <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col gap[5px] w-full ">
          <div className="flex flex-row">Cuidados <button onClick={(e)=>handleClick(e)} ><MdExpandMore /></button> </div>
            
          </li>
          <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col gap-[5px] w-full ">
            <div className="flex flex-row">Detalles <button onClick={(e)=>handleClick(e)} ><MdExpandMore /></button> </div>
            {desplegable !== false&&
            <div className="flex flex-row">
             <ul className="grid-cols-2">
              <li className="list-disc">Corte ajustado</li>
              <li className="list-disc">Cuello redondo acanalado</li>
              <li className="list-disc">Tejido de punto doble 100 % poliéster reciclado</li>
              <li className="list-disc">Tecnología de absorción AEROREADY</li>
              <li className="list-disc">Paneles de malla en los costados</li>
              <li className="list-disc">Puños acanalados</li>
             </ul>
            </ div>}
           
          </li>
        </ul>
      </div>
    )
}


export default SelectoresProduct;