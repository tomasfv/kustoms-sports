import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='border rounded-md h-12 w-30 font-bold mb-2 p-2
    dark:bg-main-dark 
    dark:border-verde-dark 
    dark:text-main-light
    dark:hover:bg-red-dark 
    dark:hover:border-red-dark
    dark:hover:text-main-light
    hover:bg-red-dark 
    hover:text-main-light 
    hover:border-red-dark                      
    text-main-light 
    bg-main-dark
    border-verde-dark' onClick={() => logout({ returnTo: window.location.origin })}>
      Salir
    </button>
  );
};