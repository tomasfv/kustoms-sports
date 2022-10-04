import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    isAuthenticated && (
      <div className="font-bold text-xs grid gap-2 justify-items-center m-2 text-main-dark dark:text-main-light">
        <Link to={'/profile'}>
          <img
            src={user.picture}
            alt="avatar"
            /*    onError={event => {
            event.target.src = "https://thumbs.dreamstime.com/b/running-man-athletics-marathon-summer-sport-run-icon-isolated-white-background-minimal-cover-design-creative-running-man-158850742.jpg"
            event.onerror = null
          }}   */
            className="h-12 w-12 rounded-full"
          />
        </Link>
        {/* <p>{user.name}</p> */}
        {/* <p>{user.email}</p> */}
      </div>
    )
  )
}
