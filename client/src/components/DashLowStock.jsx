import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllStock} from "../redux/actions";


function DashLowStock() {
    const allStock = useSelector((state) => state.allStock);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllStock());
      }, [dispatch]);

   

    return (
    <div className="grid grid-col justify-items-center  ">
        <div className=" text-xl mt-[50px] mb-4 font-bold">
            Productos ordenados por Stock
        </div>
        <table className="border block w-[780px] h-[700px] ml-10 mr-2 mb-[200px] overflow-y-scroll" >
            <thead className="" >
                <tr className=" sticky top-0 bg-gris-light border-[1px] w-[780px] mb-[20px] text-md mr-4">
                    <th className="border pl-2 pr-2">Tipo</th>
                    <th className="border pl-2 pr-2">Nombre</th>
                    <th className="border pl-2 pr-2">Género</th>
                    <th className="border pl-2 pr-2">Imagen</th>
                    <th className="border pl-2 pr-2">Talla</th>
                    <th className="border pl-2 pr-2">Stock</th>
                </tr>
            </thead>
            <tbody classname = "">
                    {allStock.map(e =>{
                        return (
                            <>
                            <tr className="text-l mr-4">
                                <td className="border pl-2 pr-2">{e.clotheType}</td>
                                <td className="border pl-2 pr-2">{e.name}</td>
                                <td className="border pl-2 pr-2">{e.gender}</td>
                                <td className="border pl-2 pr-2"><img src={e.image} className='w-[30px] h-[30px] rounded-full ml-[25%]'/></td>
                                <td className="border pl-2 pr-2">{e.size}</td>
                                <td className="border pl-2 pr-2">{e.stock}</td>
                            </tr>
                            </>
                        )
                    })}

            </tbody>
        </table>
    </div>  
    );
  }
  
  export default DashLowStock;

 