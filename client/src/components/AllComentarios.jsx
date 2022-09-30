import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashComment, getAllUsers } from "../redux/actions";
import swal from "sweetalert2";

const AllComentarios = () =>{

    const allusers = useSelector((state) => state.allUsers);
    const comentarios = allusers.map(e=>{return(e.comments)})
    console.log(comentarios)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllUsers())
    },[dispatch])
    
    function reload (){
        window.location.reload();
    }

    function handleBan(e){
        let id = e.target.id
       dispatch(dashComment(id))
       swal.fire({
        position: "top-end",
        icon: "success",
        title: "Comentario baneado",
        showConfirmButton: false,
        timer: 2500,
      })
      reload();
    }
    return(
        <div>
            <div className="flex  items-center justify-center mt-[100px]">
                
                      <table >
                                <thead className="max-w-[500px]">
                                 <tr>
                                    {/* <th className="border">picture</th>
                                    <th className="border">Email</th> */}
                                    <th className="border max-w-[500px]">Comentarios</th>
                                    <th className="border">Available</th>
                                    
                                 </tr>
                                 
                                </thead>
                                <tbody>
                                {comentarios?.map(c=>{return(c.map(t=>{
                                    
                        return(
                             <tr>
                                
                                <td className="border max-w-[500px] ">{t.texto}</td>
                              <td className="border" >
                              <button onClick={(e)=>handleBan(e)} id={t.id} >{t.available.toString()} </button></td>
                                </tr>
                        )
                    }))})}
                                </tbody>
                            
                      </table>
                    
                
            </div>
        </div>
    )
}
export default AllComentarios;