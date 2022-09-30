import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import BarChart from "../components/BarChart";
import { LogoutButton } from '../components/Logout';
import Tab from '../components/Tab'
import DashUserTable from "../components/DashUserTable";





export const Profile2 = () => {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  
  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    isAuthenticated && (
      <div>
        <div className="relative top-60 mb-[280px] m-4 flex flex-row justify-center">
        
          <div className=" font-bold border-2 rounded-lg h-[800px]  p-4 space-y-4 grid justify-items-center dark:bg-verde-dark dark:border-verde-dark dark:text-main-dark dark:hover:bg-main-dark dark:hover:border-verde-light dark:hover:text-verde-light hover:bg-gris-dark text-main-light bg-verde-light border-verde-dark">
            <p className="text-2xl">Hola {user.given_name}!</p>
            <p className="text-3xl">Perfil</p>
            <img 
              src={user.picture} 
              alt='avatar' 
            /*   onError={event => {
                event.target.src = "https://thumbs.dreamstime.com/b/running-man-athletics-marathon-summer-sport-run-icon-isolated-white-background-minimal-cover-design-creative-running-man-158850742.jpg"
                event.onerror = null
              }} */
              className='h-[150px] w-[150px] rounded-full border-2 border-verde-dark' /> 
            <p className="text-lg">usuario</p>
            <p className="text-2xl">{user.name}</p>
            <p className="text-lg">e-mail</p>
            <p className="text-lg">{user.email}</p>
            <LogoutButton/>
          </div>
          <Tab/>
        </div>
    </div>
    )
  );
  
}