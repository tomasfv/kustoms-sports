import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserComments} from "../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";




export default function ProfileUserCom({ openCom, children, onClose }) {
    const comments = useSelector ((state) => state.profileCom);
    const dispatch = useDispatch()
    const { user } = useAuth0();
    const email = user?.email;


    useEffect (() =>{                                
        dispatch(getUserComments(email));                    
     }, [dispatch]);
    
     if (!openCom) return null      // si open es false no renderizo el modal

  
    return(
        <>
       
        {/* comentarios */}
        <div className="font-bold justify-items-center mb-[200px]">
                  <div className="">
                    <button onClick={onClose} className="border m-2 p-5 rounded-lg text-2xl bg-verde-light h-[70px] w-[99%]">COMENTARIOS</button> 
                    {comments.map(e =>{
                      return (
                        <div className="border flex flex-row justify-between bg-main-dark bg-opacity-[10%] rounded-lg m-[10px] p-[20px] text-xl">
                          <div className="mr-[20px]">
                          {e.producto}
                          </div>
                          <div className="mr-[20px] flex flex-row">
                          {e.texto+' - Puntaje: '+e.rank}
                          </div>
                          <div>
                            Fecha: {e.fecha.split('T')[0]}
                          </div>
                        </div>
                        
                        )
                      })}
                    </div>
              </div>
      </>
      
    )
  }