import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className='border rounded-md h-12 w-40 font-bold 
  dark:bg-main-dark 
  dark:border-verde-dark 
  dark:hover:bg-verde-dark 
  dark:hover:border-verde-light
  dark:hover:text-main-dark
  hover:bg-verde-light 
  hover:text-main-light 
  hover:border-verde-light 
  text-verde-light 
  bg-main-light'  onClick={() => loginWithRedirect()}>Ingresar</button>;
};