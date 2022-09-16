import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="font-bold text-xs grid gap-2 justify-items-center m-2 text-main-dark dark:text-main-light">
        <img src={user.picture} alt={user.name} className='h-12 w-12 rounded-full' />
        <p>{user.name}</p>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
  
};