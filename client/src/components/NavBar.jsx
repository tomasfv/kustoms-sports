import { useState } from 'react'
import { MdMenu, MdClose, MdLightbulbOutline, MdLightbulb, MdShoppingCart, MdOutlineChevronRight } from 'react-icons/md'
import smLogo from '../assets/smLogo.png'
import logoLargo from '../assets/logoLargo.png'
import logoLargoLight from '../assets/logoLargoLight.png'
import { Link } from 'react-router-dom'
import { Button } from './index'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../redux/actions'
import { useEffect } from 'react'


const NavBar = () => {
    const [isShowing, setIsShowing] = useState(false)
    const [showingMarca, setShowingMarca] = useState(false)
    const [showingDeporte, setShowingDeporte] = useState(false)

    const dispatch = useDispatch()
    const theme = useSelector(state => state.theme)
    const handleClick = () => {
        setIsShowing(!isShowing)
    }
    const handleClickMarca = () => {
        setShowingMarca(!showingMarca)
    }
    const handleClickDeporte = () => {
        setShowingDeporte(!showingDeporte)
    }
    const hadndleTheme = () => {
        if (theme === 'light') {
            dispatch(changeTheme('dark'))
        } else {
            dispatch(changeTheme('light'))
        }
    }
    useEffect(() => {
        setIsShowing(false)
    }, [])


    const data = {
        "brand": [
            "sonder",
            "adidas",
            "pirulo",
            "nike",
            "underwear",
            "new balance",
            "Fila"
        ],
        "collection": [
            "verano",
            "primavera"
        ],
        "gender": [
            "Hombre",
            "Mujer",
            "Otro",
        ],
        "sport": [
            "golf",
            "futbol"
        ]
    }

    return (
        <>
            {/* NavBar Pequeña */}
            <nav className='z-50 fixed top-0 lg:hidden w-full flex flex-row justify-between text-main-dark dark:text-main-light h-16 bg-main-light dark:bg-main-dark transition-all duration-300'>
                <Link className='h-16 w-fit pl-5' to={'/'}><img src={smLogo} alt="logo-small" className='h-16 w-16' /></Link>
                <div className='flex flex-row  gap-3 items-center'>
                    <Link to={'/'} className='w-fit h-fit relative'>
                        <MdShoppingCart className='h-10 w-10 dark:text-main-light' />
                        <p className='absolute right-0 -top-2 z-10 bg-verde-light  rounded-full  font-bold'>0</p>
                    </Link>
                    <button><MdMenu onClick={handleClick} className='h-14 w-14 pr-5' /></button>
                </div>


                <div className={`${isShowing ? 'flex' : 'hidden'} fex w-screen fixed flex-row z-30`}>
                    <span className={`backdrop-blur-lg w-1/4 absolute left-0 h-screen `}></span>

                    <div className={`flex absolute top-0 right-0 h-screen w-3/4  flex-row bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light`}>
                        <button className='w-16 h-16 absolute -left-16 bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light' onClick={handleClick}><MdClose className='mx-auto w-14 h-14' /></button>
                        <div className='w-full opacity-100 right-0 relative flex flex-col align-baseline'>
                            <img src={theme === 'light' ? logoLargoLight : logoLargo} alt="logo-grande" className='w-fit mx-auto my-1' />
                            <ul className='flex flex-col text-justify'>
                                {data.gender.map(gen => {
                                    return <Link to={'/'} className='text-main-dark dark:text-main-light text-base py-8 pl-6 border-gris-light border-b w-full'>{gen}</Link>

                                })}
                                <li onClick={handleClickMarca} className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b list-none w-full cursor-pointer'>
                                    Marca
                                    <div className={`mt-5 ${showingMarca ? 'flex flex-col' : 'hidden'}`} >
                                        {data.brand.map(bra => {
                                            return <Link className='ml-5 px-2 py-5 flex flex-row items-center gap-1 uppercase text-justify'>
                                                {bra}
                                                <MdOutlineChevronRight className='text-verde-light' />
                                            </Link>
                                        })}
                                    </div>
                                </li>
                                <li onClick={handleClickDeporte} className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b list-none w-full cursor-pointer'>
                                    Deporte
                                    <div className={`mt-5 ${showingDeporte ? 'flex flex-col' : 'hidden'}`} >
                                        {data.sport.map(spr => {
                                            return <Link className='ml-5 px-2 py-5 flex flex-row items-center gap-1 uppercase text-justify'>
                                                {spr}
                                                <MdOutlineChevronRight className='text-verde-light' />
                                            </Link>
                                        })}
                                    </div>
                                </li>
                            </ul>
                            <div className='gap-6 flex flex-col ml-6 mt-10'>
                                <Button classname={'mb-3'} type={'registrarse'} />
                                <Button className='my-3' type={'ingresar'} />

                                <button onClick={hadndleTheme} className='border rounded-md border-main-dark dark:border-verde-dark w-fit p-3'>
                                    {theme === 'light' ? <MdLightbulb className='w-10 text-main-dark' /> : <MdLightbulbOutline className='w-10 text-verde-light' />}
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* NavBar grande */}

            <nav className='hidden lg:flex fixed top-0 justify-between items-center bg-main-light dark:bg-main-dark z-50 w-full transition-all duration-300'>
                <Link className='ml-5'>
                    <img src={theme === 'light' ? logoLargoLight : logoLargo} className='h-10 w-auto ' alt="logo-kustoms" />
                </Link>
                <div>
                    <ul className='flex flex-row'>
                        {data.gender.map((gen) => {
                            return <Link to={'/'} className='group text-main-dark dark:text-main-light text-base py-8 ml-6 flex flex-col relative'>
                                <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                                <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                                {gen}
                            </Link>

                        })}
                        <li onClick={handleClickMarca} className=' group text-main-dark dark:text-main-light text-base py-8 ml-6 cursor-pointer relative'>
                            <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                            <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                            Marca
                            <div className={` py-2 hidden group-hover:flex flex-col bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light absolute gap-3 mt-5 px-3`}>
                                {data.brand.map(bra => {
                                    return <Link className='p-2 flex flex-row items-center gap-1 uppercase text-justify border border-transparent hover:border-verde-light dark:hover:border-verde-dark rounded-sm'>
                                        {bra}
                                        <MdOutlineChevronRight className='text-verde-light' />
                                    </Link>
                                })}
                            </div>
                        </li>
                        <li onClick={handleClickDeporte} className='group text-main-dark dark:text-main-light text-base py-8 ml-6 cursor-pointer overflow-hidden'>
                            <span className='w-16 bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                            <span className='w-16 bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                            Deporte
                            <div className={`py-2 hidden group-hover:flex flex-col rounded-sm bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light absolute gap-3 mt-5 px-3`}>
                                {data.sport.map(spr => {
                                    return <Link className='p-2 flex flex-row items-center gap-1 uppercase text-justify border border-transparent hover:border-verde-light dark:hover:border-verde-dark'>
                                        {spr}
                                        <MdOutlineChevronRight className='text-verde-light' />
                                    </Link>
                                })}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-row h-fit gap-2 xl:gap-5  mr-5 items-center'>
                    <Link to={'/'} className='w-fit h-fit relative'>
                        <MdShoppingCart className='h-10 w-10 dark:text-main-light' />
                        <p className='absolute right-0 -top-2 z-10 bg-verde-light  rounded-full  font-bold'>0</p>
                    </Link>
                    <button onClick={hadndleTheme} className='border rounded-md h-12 border-main-dark dark:border-verde-dark hover:bg-verde-light hover:border-verde-light dark:hover:bg-gris-dark dark:hover:border-botvmioleta-light transition-all duration-300 '>
                        {theme === 'light' ? <MdLightbulb className='w-10 text-main-dark' /> : <MdLightbulbOutline className='w-10 text-verde-light' />}
                    </button>
                    <Button type={'registrarse'} />
                    <Button type={'ingresar'} />
                </div>
            </nav>
        </>
    )
}

export default NavBar