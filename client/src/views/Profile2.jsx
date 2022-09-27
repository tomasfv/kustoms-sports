import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from '../components/Logout';
import { useState, useEffect } from 'react'
import { getUserComments, getUserCarts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Modal from './Modal'



export const Profile2 = () => {
  const [isOpen, setIsOpen] = useState(false)               //Modal
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const comments = useSelector ((state) => state.profileCom);
  const carts = useSelector((state) => state.profileCarts)
  const email = user?.email;


  useEffect (() =>{                                
        dispatch(getUserComments(email));                    
     }, [dispatch]);
  useEffect (() =>{                                
        dispatch(getUserCarts(email));                    
      }, [dispatch]);

  //console.log(carts[0].products[0].nombre)

  const products = carts.map(e => e.products)
  const productsInfo = products.map(e =>{ return e } )
  const productsInfoName = productsInfo.map(n =>{return n.map(l =>{ return l.nombre + l.image + l.precio})})
  
  console.log(productsInfoName)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <div className="relative top-60 mb-[280px] flex flex-row justify-center">
        
          <div className=" font-bold border-2 rounded-lg p-4 space-y-4 grid justify-items-center dark:bg-verde-dark dark:border-verde-dark dark:text-main-dark dark:hover:bg-main-dark dark:hover:border-verde-light dark:hover:text-verde-light hover:bg-gris-dark text-main-light bg-verde-light border-verde-dark">
            <p className="text-xl">Hola {user.given_name}!</p>
            <p className="text-2xl">Perfil</p>
            <img 
              src={user.picture} 
              alt='avatar' 
            /*   onError={event => {
                event.target.src = "https://thumbs.dreamstime.com/b/running-man-athletics-marathon-summer-sport-run-icon-isolated-white-background-minimal-cover-design-creative-running-man-158850742.jpg"
                event.onerror = null
              }} */
              className='h-20 w-20 rounded-full border-2 border-verde-dark' /> 
            <p className="text-sm">usuario</p>
            <p className="text-2xl">{user.name}</p>
            <p className="text-sm">e-mail</p>
            <p className="text-md">{user.email}</p>
            <LogoutButton/>
          </div>
        </div>
          <div>
              <hr className="m-4"></hr>
          </div>
            {/* <>
              <div>
                <button onClick={() => setIsOpen(true)} className='border rounded p-4 m-4 font-bold'>Comentarios</button>

                <Modal open={isOpen} onClose={() => setIsOpen(false)} className='grid grid-col justify-items-center'>   
                  {comments.map(e => e.texto)}
                </Modal>
              </div>
            </> */}
            <div className="flex flex-row justify-around">
            <div className="grid grid-col font-bold justify-items-center">
                <div className="">
                  <p className="border rounded-lg text-2xl bg-verde-light h-[70px]">COMENTARIOS</p> {comments.map(e =>{
                    return (
                      <div className="border rounded-lg m-[10px] w-[400px] p-4">
                        <div>
                        {e.producto}
                        </div>
                        <div>
                        {e.fecha}
                        </div>
                        <div>
                        {e.texto+' - Puntaje: '+e.rank}
                        </div>
                      </div>
                      
                      )
                    })}
                  </div>


            </div>
            <div className="grid grid-col font-bold justify-items-center">
                <div className="">
                  <p className="border rounded-lg text-2xl bg-verde-light h-[70px]">COMPRAS</p> {productsInfo.map(n =>{return n.map(l =>{
                    return (
                      <div className="border rounded-lg m-[10px] w-[400px] p-4">
                        <div>
                          <div>
                            {l.nombre}
                          </div>
                          <div>
                            ${l.precio}
                          </div>
                          <div>
                            <img src={l.image} className='w-[100px] h-[100px]'/>
                          </div>
                        </div>
              
                      </div>
                      
                      )
                    })})}
                  </div>


            </div>
            </div>
      </div>
    )
  );
  
}