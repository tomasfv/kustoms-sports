import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, updateBanUser, updateUser} from "../redux/actions";
import swal from "sweetalert2";

function DashUserTable() {
    const allUsers = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");
    const [filtName, setFiltName] = useState("");
    // const [emailBan, setEmailBan] = useState("")
    const [changed, setChanged] = useState(true);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch, changed]);


    function handleInputChange(e){
        e.preventDefault();
        setSearchName(e.target.value);
    }

    // dispatch(updateBanUser(emailBan))
    // dispatch(updateUser(upgUser))
    // console.log('BANEADO: ', emailBan)
    
    function handleSubmit(e){
        e.preventDefault();
        let nombreFinal = allUsers.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
        setFiltName(nombreFinal);
        //console.log('FILTRADO: ', nombreFinal) 
    }

    function handleClick(e){
        setChanged(!changed)
        let title = "..."
        let values =  e.target.value.split(",")
        let valor = false
        if (values[1] !== 'true') {
            valor = false
            title = "Usuario habilitado"
        } else {
            title = "Usuario baneado"
            valor = true
        }
   
        dispatch(updateBanUser(values[0]))
        if (filtName)  {
            let nombreFinal = allUsers.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
            for (let i = 0; i < nombreFinal.length; i++) {
               if ( nombreFinal[i].id == values[2]){
                nombreFinal[i].available = !valor
               }
            }
            setFiltName(nombreFinal);
        }
        swal.fire({
            position: "top-end",
            icon: "success",
            title: title,
            showConfirmButton: false,
            timer: 2000,
        })  
        //   reload();
    }

    function handleProfile(e){
        setChanged(!changed)
        let title = "..."
        let values =  e.target.value.split(",")
        let valor = 'Admin'
        if (values[1] !== 'Admin') {
            valor = "Admin"
            title = "Usuario Admin"
        } else {
            title = "Usuario Client"
            valor = "Client"
        }

        dispatch(updateUser(values[0]))
        if (filtName)  {
            let nombreFinal = allUsers.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
            for (let i = 0; i < nombreFinal.length; i++) {
               if ( nombreFinal[i].id == values[2]){
                nombreFinal[i].profile = valor
               }
            }
            setFiltName(nombreFinal);
        }
        swal.fire({
            position: "top-end",
            icon: "success",
            title: title,
            showConfirmButton: false,
            timer: 2000,
        })  
        //   reload();
    }


    return (
    <div >
        <div className="text-xl mt-[50px] font-bold mb-4">
           Usuarios
        </div>
        <div className="m-4">
            <input type = 'text' placeholder = 'buscar...' className="border" onChange={(e) => handleInputChange(e)}/>
            <button className="border font-bold pl-2 pr-2 ml-1" type = 'submit' onClick={(e) => handleSubmit(e)}>BUSCAR</button>
        </div>
        <table className="border w-[900px] ml-10 mr-2 mb-[200px]">
            <thead>
                <tr className="text-sm">
                    <th className="border">id</th>
                    <th className="border">nombre</th>
                    <th className="border">email</th>
                    <th className="border">imagen</th>
                    <th className="border">perfil</th>
                    {/* <th className="border">profile</th> */}
                    <th className="border">habilitado</th>
                    {/* <th className="border">available</th> */}
                    <th className="border">creado</th>
                </tr>
            </thead>
            <tbody>
                    {filtName? filtName.map(f =>{
                        return(
                            <>
                            <tr className="text-l">
                                <td className="border">{f.id}</td>
                                <td className="border">{f.name}</td>
                                <td className="border">{f.email}</td>
                                <td className="border"><img src={f.picture} className='w-[30px] h-[30px] rounded-full ml-[25%]'/></td>
                                {/* <td className="border hover:bg-gris-light" ><button onClick={() => setUpgUser(f.email)}>{f.profile}</button></td> */}
                                <td className="border hover:bg-gris-light" ><button value={[f.email, f.profile, f.id]} onClick={(e)=>handleProfile(e)}>{f.profile}</button></td>
                                <td className="border hover:bg-gris-light" ><button value={[f.email, f.available, f.id]} onClick={(e)=>handleClick(e)}>
                                    {/* <button onClick={() => setEmailBan(f.email)}> */}
                                {f.available.toString()}
                                </button></td>
                                <td className="border">{f.createdAt}</td>
                            </tr>
                            </>
                        )
                    })
                      : allUsers.map(e =>{
                        return (
                            <>
                            <tr className="text-l">
                                <td className="border">{e.id}</td>
                                <td className="border">{e.name}</td>
                                <td className="border">{e.email}</td>
                                <td className="border"><img src={e.picture} className='w-[30px] h-[30px] rounded-full ml-[25%]'/></td>
                                {/* <td className="border hover:bg-gris-light"><button onClick={() => setUpgUser(e.email)}>{e.profile}</button></td> */}
                                <td className="border hover:bg-gris-light"><button value={[e.email, e.profile, e.id]} onClick={(e)=>handleProfile(e)}>{e.profile}</button></td>
                                {/* <td className="border">
                                    <select>
                                        <option>Admin</option>
                                        <option value='default'>Client</option>
                                        
                                    </select>
                                </td> */}
                                <td className="border hover:bg-gris-light" ><button value={[e.email, e.available, e.id]} onClick={(e)=>handleClick(e)}>
                                {/* onClick={() => setEmailBan(e.email)}> */}
                                {e.available.toString()}
                                </button></td>
                                {/* <td className="border">
                                    <button onClick={() => setEmailBan(e.email)}>
                                        CHANGE
                                        
                                    </button>
                                </td> */}
                                <td className="border">{e.createdAt}</td>
                            </tr>
                            </>
                        )
                    })}

            </tbody>
        </table>
    </div>  
    );
  }
  
  export default DashUserTable;