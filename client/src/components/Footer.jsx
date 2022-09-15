import logoLargo from '../assets/logoLargo.png'
import { GrLinkedinOption } from 'react-icons/gr'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { MdCopyright } from 'react-icons/md'


const Footer = () => {
    return (
        
        
        <footer className="flex flex-col bg-gris-light dark:bg-gris-dark min-h-[30.5rem]" >
            <div className=" w-full flex flex-row justify-around text-main-dark dark:text-main-light p-20">
                <img src={logoLargo} className='h-10 w-auto ml-5' alt="logo-kustoms" />
                <div className="flex flex-col">
                    <div className="font-bold">Community</div>
                    <a href='https://blog.soyhenry.com/' target="_blank">Henry Blog</a>
                    <a href='https://www.adidas.com/us' target='_blank'>The Portal</a>
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
                     border-verde-light'>Registrarse</button>
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
                <div className='flex flex-row'>
                    <MdCopyright className='h-5 w-5 mr-1 '/>
                    <p>The Last Dance.inc 2022. We love our users!</p>
                </div>
                <div className='flex flex-row'>
                    <p className='mr-4'>Follow </p>
                    <a href='https://www.linkedin.com/' target='_blank'><GrLinkedinOption className='h-5 w-5 mr-4'/></a>
                    <a href='https://www.facebook.com/' target='_blank'><BsFacebook className='h-5 w-5 mr-4'/></a>
                    <a href='https://www.instagram.com/' target='_blank'><BsInstagram className='h-5 w-5'/></a>
                </div>
            </div>

        </footer>
        
       
    )
}

export default Footer