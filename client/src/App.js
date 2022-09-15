import Rutas from './routes/Rutas'
import './App.css';
import { LoginButton } from './components/Login';
import { LogoutButton } from './components/Logout';
import { Profile } from './components/Profile';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App bg-main-light dark:bg-main-dark min-h-screen transition-all duration-150">
      <Rutas/>
      {/* <h1 className='text-lg uppercase'> Hola Mundo 2 </h1> */}
      {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
    </div>
  );
}

export default App;
