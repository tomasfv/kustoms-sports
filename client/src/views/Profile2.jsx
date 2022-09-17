import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from '../components/Logout';
import logoLargo from '../assets/logoLargo.png'


console.log('afuera')

export const Profile2 = () => {
  console.log('adentro')
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="relative top-60 mb-80 flex flex-row justify-center">
      
        <div className=" font-bold border-2 rounded-lg p-4 space-y-4 grid justify-items-center 
        dark:bg-verde-dark 
        dark:border-verde-dark 
        dark:text-main-dark
        dark:hover:bg-main-dark 
        dark:hover:border-verde-light
        dark:hover:text-verde-light
        hover:bg-gris-dark
                    
        text-main-light 
        bg-verde-light
        border-verde-dark">
          <p className="text-xl">Hola {user.given_name}!</p>
          <p className="text-2xl">Perfil</p>
          <img 
            src={user.picture} 
            alt='avatar' 
            onError={event => {
              event.target.src = "https://thumbs.dreamstime.com/b/running-man-athletics-marathon-summer-sport-run-icon-isolated-white-background-minimal-cover-design-creative-running-man-158850742.jpg"
              event.onerror = null
            }}
            className='h-20 w-20 rounded-full border-2 border-verde-dark' /> 
          <p className="text-sm">usuario</p>
          <p className="text-2xl">{user.name}</p>
          <p className="text-sm">e-mail</p>
          <p className="text-md">{user.email}</p>
          <LogoutButton/>
        </div>
    
      </div>
    )
  );
  
};