import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../redux/actions";


function DashUserTable() {
    const allUsers = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState("");
    const [filtName, setFiltName] = useState();

    useEffect(() => {
        dispatch(getAllUsers());
      }, [dispatch]);


      function handleInputChange(e){
          e.preventDefault();
          setSearchName(e.target.value);
      }

      function handleSubmit(e){
        e.preventDefault();
        let nombreFinal = allUsers.filter(e => e.name.toLowerCase().includes(searchName.toLowerCase()))
        setFiltName(nombreFinal);
        console.log('FILTRADO: ', nombreFinal) 
        }
        
    console.log('FILTNAME: ', filtName)

    return (
    <div>
        <div className=" text-4xl mt-[200px] font-bold">
            DASHBOARD USERS TABLE
        </div>
        <div className="m-4">
            <input type = 'text' placeholder = 'buscar...' className="border" onChange={(e) => handleInputChange(e)}/>
            <button className="border font-bold pl-2 pr-2 ml-1" type = 'submit' onClick={(e) => handleSubmit(e)}>BUSCAR</button>
        </div>
        <table className="border w-[97%] ml-5 mr-2 mb-[200px]">
            <thead>
                <tr className="text-2xl">
                    <th className="border">id</th>
                    <th className="border">name</th>
                    <th className="border">email</th>
                    <th className="border">picture</th>
                    <th className="border">profile</th>
                    <th className="border">available</th>
                    <th className="border">createdAt</th>
                </tr>
            </thead>
            <tbody>
                    {filtName? filtName.map(f =>{
                        return(
                            <>
                            <tr className="text-xl">
                                <td className="border">{f.id}</td>
                                <td className="border">{f.name}</td>
                                <td className="border">{f.email}</td>
                                <td className="border"><img src={f.picture} className='w-[60px] h-[60px] rounded-full ml-[25%]'/></td>
                                <td className="border">{f.profile}</td>
                                <td className="border">{f.available.toString()}</td>
                                <td className="border">{f.createdAt}</td>
                            </tr>
                            </>
                        )
                    })
                      : allUsers.map(e =>{
                        return (
                            <>
                            <tr className="text-xl">
                                <td className="border">{e.id}</td>
                                <td className="border">{e.name}</td>
                                <td className="border">{e.email}</td>
                                <td className="border"><img src={e.picture} className='w-[60px] h-[60px] rounded-full ml-[25%]'/></td>
                                <td className="border">{e.profile}</td>
                                <td className="border">{e.available.toString()}</td>
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