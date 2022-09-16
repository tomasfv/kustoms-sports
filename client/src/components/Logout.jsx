import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className='border rounded-md h-12 w-30 font-bold mb-2 p-2
    dark:bg-verde-dark 
    dark:border-verde-dark 
    dark:text-main-dark
    dark:hover:bg-main-dark 
    dark:hover:border-verde-light
    dark:hover:text-verde-light
    hover:bg-main-light 
    hover:text-verde-light 
    hover:border-verde-light                      
    text-main-light 
    bg-verde-light
    border-verde-light' onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};