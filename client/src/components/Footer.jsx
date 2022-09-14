import smLogo from '../assets/smLogo.png'
import logoLargo from '../assets/logoLargo.png'
import logoLargoLight from '../assets/logoLargoLight.png'

const Footer = () => {
    return (
        
        
        <footer className="flex flex-col bg-gris-light dark:bg-gris-dark min-h-[30.5rem]" >
            <div className=" w-full flex flex-row justify-around text-main-dark dark:text-main-light p-20">
                <img src={logoLargo} className='h-10 w-auto ml-5' alt="logo-kustoms" />
                <div className="flex flex-col">
                    <div className="font-bold">Community</div>
                    <p>Henry Blog</p>
                    <p>The Portal</p>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold">Company</div>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>History</p>
                </div>
                    <div className="flex flex-col">
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
                     border-verde-light   '>Registrarse</button>
                    <button className='border rounded-md h-12 w-30 font-bold 
                     dark:bg-main-dark 
                     dark:border-verde-dark 
                     dark:hover:bg-verde-dark 
                     dark:hover:border-verde-light
                     dark:hover:text-main-dark
                     hover:bg-verde-light 
                     hover:text-main-light 
                     hover:border-verde-light 
                     text-verde-light 
                     bg-main-light   '>Ingresar</button>
                </div>
            </div>
            <div className="w-full p-10  text-main-dark dark:text-main-light">
                <hr></hr>
            </div>
            <div className="w-full flex flex-row justify-around  text-main-dark dark:text-main-light">
                <p>The Last Dance.inc 2022. We love our users!</p>
                <p>Follow</p>
            </div>

        </footer>
        
       
    )
}

export default Footer