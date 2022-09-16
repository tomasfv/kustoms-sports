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
      //<div className="border-2 p-6 m-60 font-bold text-xs grid gap-2 justify-items-center text-main-dark dark:text-main-light">
        <div className="border-2 p-6 m-60 font-bold bg-gris-light grid gap-3 justify-items-start">
          <div className="flex flex-row">
            <img src={user.picture} alt={user.name} className='h-20 w-20 rounded-full' />
            <p className="text-xl ">Perfil</p>
          </div>
        <p>usuario: {user.name}</p>
        <p>e-mail: {user.email}</p>
        <p>nombre: {user.given_name}</p>
        <p>apellido: {user.family_name}</p>
        <LogoutButton/>

      </div>
    )
  );
  
};