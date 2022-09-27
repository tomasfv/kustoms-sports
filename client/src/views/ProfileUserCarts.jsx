import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserCarts} from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";




export default function ProfileUserCarts({ openCarts, children, onClose }) {
    const carts = useSelector ((state) => state.profileCarts);
    const dispatch = useDispatch()
    const { user } = useAuth0();
    const email = user?.email;


    useEffect (() =>{                                
        dispatch(getUserCarts(email));                    
     }, [dispatch]);
    
    const products = carts.map(e => e.products)
    const productsInfo = products.map(e =>{ return e } )
    const productsInfoName = productsInfo.map(n =>{return n.map(l =>{ return l.nombre + l.image + l.precio})})
    
    if (!openCarts) return null      // si open es false no renderizo el modal

  
    return(
        <>
       
            {/* compras */}
                <div className="font-bold justify-items-center mb-[200px]">
                  <div className="">
                    <button onClick={onClose} className="border m-2 p-5 rounded-lg text-2xl bg-verde-light h-[70px] w-[99%]">COMPRAS</button> 
                    {productsInfo.map(n =>{return n.map(l =>{
                      return (
                        <div className="border flex flex-row justify-between bg-main-dark bg-opacity-[10%] rounded-lg m-[10px] p-[20px] text-xl">
                            <div className="mr-[20px]">
                              <img src={l.image} className='w-[100px] h-[100px] rounded-full'/>
                            </div>
                              <div className="m-4">
                                {l.nombre}
                              </div>
                              <div className="m-4">
                                ${l.precio}
                              </div>
                        </div>
                        
                        )
                      })})}
                    </div>
              </div>
      </>
      
    )
  }