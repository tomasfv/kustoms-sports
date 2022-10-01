import { useState, useEffect } from "react"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { PreviewCard, DashFilter } from "./index"
import { useSelector, useDispatch } from "react-redux"
import { getfinance } from '../redux/actions'

const DashFinances = () => {

    const dispatch = useDispatch()
    const financedata = useSelector((state) => state.finances);
    useEffect(() => {
        dispatch(getfinance());
      }, [dispatch]);
    
console.log("holi",financedata)

    return (
        <div className="grid grid-col justify-items-center  ">
        <div className=" text-xl mt-[50px] font-bold mb-4">
            VENTAS REALIZADAS
        </div>
        <table className="border w-[580px] ml-10 mr-2" >
            <thead className="" >
                <tr className=" sticky top-0 bg-gris-light border-[1px] w-[780px] mb-[20px] text-md mr-4">
                <th className="border pl-2 pr-2">Imagen</th>
                    <th className="border pl-2 pr-2">Email</th>
                    <th className="border pl-2 pr-2">Total</th>
                    <th className="border pl-2 pr-2">Fecha de pago</th>
               
               
                </tr>
            </thead>
            <tbody classname = "">
                    {financedata.map(e =>{
                        return (
                            <>
                            <tr className="text-l mr-4">
                                <td className="border"><img src={e.picture} className='w-[30px] h-[30px] rounded-full ml-[25%]'/></td>
                                <td className="border pl-2 pr-2">{e.email}</td>
                                <td className="border pl-2 pr-2">{e.totalamount}</td>
                                <td className="border pl-2 pr-2">{e.updatedAt.split("T")[0]}</td>
                            
                             
                            </tr>
                            </>
                        )
                    })}

            </tbody>
        </table>
    </div>  
    )
}

export default DashFinances;