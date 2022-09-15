

import { MdExpandMore} from "react-icons/md";


const SelectoresProduct = () =>{
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
    )
}


export default SelectoresProduct;