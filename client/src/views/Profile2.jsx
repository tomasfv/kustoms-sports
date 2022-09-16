import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from '../components/Logout';

console.log('afuera')

export const Profile2 = () => {
  console.log('adentro')
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="object-bottom">
        <p className="font-bold">Hola {user.given_name}!</p>
      <div className="  ">
        <img src={user.picture} alt={user.name} className='h-20 w-20 rounded-full' /> 
      <div className="p-8 font-bold  text-main-dark dark:text-main-light ">
        <p className="text-2xl">Perfil</p>
        <p>usuario: {user.name}</p>
        <p>e-mail: {user.email}</p>
        <p>nombre: {user.given_name}</p>
        <p>apellido: {user.family_name}</p>
        <LogoutButton/>
      </div>
    </div>
      </div>
    )
  );
  
};