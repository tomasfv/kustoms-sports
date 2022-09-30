import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, updateBanUser, updateUser} from "../redux/actions";


function DashUserTable() {
    const allUsers = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");
    const [filtName, setFiltName] = useState();
    const [emailBan, setEmailBan] = useState("")
    const [upgUser, setUpgUser] = useState("")

    useEffect(() => {
        dispatch(getAllUsers());
      }, [dispatch]);


      function handleInputChange(e){
          e.preventDefault();
          setSearchName(e.target.value);
      }

      
      dispatch(updateBanUser(emailBan))
      dispatch(updateUser(upgUser))
      console.log('BANEADO: ', emailBan)
      
      function handleSubmit(e){
          e.preventDefault();
          let nombreFinal = allUsers.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
          setFiltName(nombreFinal);
          //console.log('FILTRADO: ', nombreFinal) 
        }
        

    return (
    <div >
        {/* <div className=" text-4xl mt-[200px] font-bold">
            DASHBOARD USERS TABLE
        </div> */}
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
                                <td className="border hover:bg-gris-light" ><button onClick={() => setUpgUser(f.email)}>{f.profile}</button></td>
                                <td className="border hover:bg-gris-light" ><button onClick={() => setEmailBan(f.email)}>
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
                                <td className="border hover:bg-gris-light"><button onClick={() => setUpgUser(e.email)}>{e.profile}</button></td>
                                {/* <td className="border">
                                    <select>
                                        <option>Admin</option>
                                        <option value='default'>Client</option>
                                        
                                    </select>
                                </td> */}
                                <td className="border hover:bg-gris-light"><button onClick={() => setEmailBan(e.email)}>
                                {e.available.toString()}
                                </button></td>
                                {/* <td className="border">
                                    <button onClick={() => setEmailBan(e.email)}>
                                        CHANGE
                                        
                                    </button>
                                </td> */}
                                <td className="border">{e.createdAt.slice(0,10)}</td>
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