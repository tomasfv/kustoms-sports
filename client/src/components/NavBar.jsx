import { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import smLogo from '../assets/smLogo.png'
import logoLargo from '../assets/logoLargo.png'
import { Link } from 'react-router-dom'
import { Button } from './index'


const NavBar = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [showingMarca, setShowingMarca] = useState(false)
    const [showingDeporte, setShowingDeporte] = useState(false)
    const handleClick = () => {
        setIsShowing(!isShowing)
    }
    const handleClickMarca = () => {
        setShowingMarca(!showingMarca)
    }
    const handleClickDeporte = () => {
        setShowingDeporte(!showingDeporte)
    }

    return (
        <>
            {/* NavBar Pequeña */}
            <nav className='lg:hidden fixed w-full flex flex-row justify-between text-main-dark dark:text-main-light h-16'>
                <Link className='h-16 w-fit pl-5' to={'/'}><img src={smLogo} alt="logo-small" className='h-16 w-16' /></Link>
                <button><MdMenu onClick={handleClick} className='h-14 w-14 pr-5' /></button>


                <div className={`${isShowing ? 'flex' : 'hidden'} fex w-screen fixed flex-row z-30`}>
                    <span className={`backdrop-blur-lg w-1/4 absolute left-0 h-screen `}></span>

                    <div className={`flex absolute top-0 right-0 h-screen w-3/4  flex-row bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light`}>
                        <button className='w-16 h-16 absolute -left-16 bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light' onClick={handleClick}><MdClose className='mx-auto w-14 h-14' /></button>
                        <div className='w-full opacity-100 right-0 relative flex flex-col align-baseline'>
                            <img src={logoLargo} alt="logo-grande" className='w-fit mx-auto my-1' />
                            <ul className='flex flex-col text-justify'>
                                <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6 border-gris-light border-b w-full'>Hombre</Link>
                                <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6 border-gris-light border-b w-full'>Mujer</Link>
                                <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b w-full'>Niños</Link>
                                <li onClick={handleClickMarca} className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b list-none w-full cursor-pointer'>
                                    Marca
                                </li>
                                <li onClick={handleClickDeporte} className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b list-none w-full cursor-pointer'>
                                    Deporte
                                </li>
                            </ul>
                            <div className='gap-6 flex flex-col ml-6 mt-10'>
                                <Button classname={'mb-3'} type={'registrarse'} />
                                <Button className='my-3' type={'ingresar'} />

                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* NavBar grande */}

            <nav className='hidden lg:flex justify-between items-center relative'>
                <img src={logoLargo} className='h-10 w-auto ml-5' alt="logo-kustoms" />
                <div>
                    <ul className='flex flex-row'>
                        <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6 '>Hombre</Link>
                        <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6 '>Mujer</Link>
                        <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6 '>Niños</Link>
                        <li onClick={handleClickMarca} className='text-main-dark dark:text-main-light text-base py-8 pl-6 cursor-pointer relative'>
                            Marca
                            <div className={`${showingMarca ? 'flex flex-col' : 'hidden'} text-main-dark dark:text-main-light absolute gap-3 mt-5`}>
                                <li>marcaA</li>
                                <li>marcaA</li>
                                <li>marcaA</li>
                            </div>
                        </li>
                        <li onClick={handleClickDeporte} className='text-main-dark dark:text-main-light text-base py-8 pl-6 cursor-pointer'>
                            Deporte
                            <div className={`${showingDeporte ? 'flex flex-col' : 'hidden'} text-main-dark dark:text-main-light absolute gap-3 mt-5`}>
                                <li>DeporteA</li>
                                <li>DeporteA</li>
                                <li>DeporteA</li>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row h-fit gap-6 mr-5'>
                    <Button classname={'mb-3'} type={'registrarse'} />
                    <Button className='my-3' type={'ingresar'} />
                </div>
            </nav>
        </>
    )
}

export default NavBar