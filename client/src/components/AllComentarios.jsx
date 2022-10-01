import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dashComment, getAllComments} from "../redux/actions";
import swal from "sweetalert2";

const AllComentarios = () =>{

    const allcomments = useSelector((state) => state.allComments);
    
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllComments())
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
    // let datos = {}
    
    //     let hola = allusers.map(e => {
    //         return{ 
    //         email: e.email,
    //         imagen: e.picture,
    //         comentarios:           
    //     }
            
    //     })

    return(
            <div className="flex  items-center justify-center">
        <div>
            <div className=" text-xl mt-[50px] font-bold mb-4">
            Comentarios
            </div>
                      <table >
                                <thead className="max-w-[500px]">
                                 <tr>
                                    <th className="border">Email</th>
                                    <th className="border">picture</th>
                                    <th className="border max-w-[500px]">Comentarios</th>
                                    <th className="border max-w-[500px]">Puntuacion</th>
                                    <th className="border">Available</th>
                                    
                                 </tr>
                                 
                                </thead>
                                <tbody>
                                {allcomments?.map((e) => {return(
                            <tr>
                                <td className="border">{e.user.email}</td>
                                <td className="border"><img src={e.user.picture} className='w-[30px] h-[30px] rounded-full ml-[25%]'/></td>
                                <td className="border max-w-[500px] ">{e.texto}</td>
                                <td className="border max-w-[500px] ">{e.rank}</td>
                                <td className="border hover:bg-gris-light">
                                <button  onClick={(e)=>handleBan(e)} id={e.id} >{e.available.toString()} </button></td>
                            </tr>
                                )})}
                                    
                                </tbody>
                            
                      </table>
                    
                
            </div>
        </div>
    )
}
export default AllComentarios;