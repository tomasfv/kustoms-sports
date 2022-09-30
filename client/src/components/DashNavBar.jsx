import React from "react";
import { useState } from 'react'
import { MdMenu, MdClose, MdLightbulbOutline, MdLightbulb, MdShoppingCart, MdOutlineChevronRight } from 'react-icons/md'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme, getDashUser, getNavData, getProductInfo } from '../redux/actions'
import { useEffect } from 'react'


import { useAuth0 } from "@auth0/auth0-react";
import { createnewuser } from '../redux/actions'








const DashNavBar = () =>{
    const { isAuthenticated, user } = useAuth0();
    const [isShowing, setIsShowing] = useState(false)
    const [showingMarca, setShowingMarca] = useState(false)
    const [showingDeporte, setShowingDeporte] = useState(false)
    const [showingColeccion, setShowingColeccion] = useState(false)
    const email = user?.email;
    const dataBuy = useSelector((state) => state.dataBuy);
    const dashuser = useSelector((state) => state.dashUser);

    const dispatch = useDispatch()
    let navData = { gender: [], collection: [], sport: [], brand: [] }
    navData = useSelector(state => state.navData)
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
    const handleClickCol = () => {
        setShowingColeccion(!showingColeccion)
    }
    const handleTheme = () => {
        if (theme === 'light') {
            dispatch(changeTheme('dark'))
        } else {
            dispatch(changeTheme('light'))
        }
    }
    useEffect(() => {
        if (isAuthenticated) {
          console.log(isAuthenticated)
          console.log(user)
          let bodydepost = {
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            picture: user.picture
          }
          dispatch(createnewuser(bodydepost))
        }
    }, [isAuthenticated])

    const handleReload = () =>{
            window.scrollTo(0, 0)
    }
    useEffect(() => {
        setIsShowing(false)
        dispatch(getNavData())
        
       
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        dispatch(getProductInfo(email))
        dispatch(getDashUser(email))
        
    },[email])
    return(
        <nav className='  z-50 justify-between items-center bg-main-light dark:bg-main-dark  transition-all duration-300'>
        
        <div>
            <ul className='flex flex-row'>
                {navData?.gender?.map((gen, index) => {
                    return <Link to={`/dashboard/gender/${gen}`} key={gen + index} className='group text-main-dark dark:text-main-light text-base py-8 ml-6 flex flex-col relative uppercase'>
                        <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                        <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                        {gen}
                    </Link>

                })}
                <li className=' group text-main-dark dark:text-main-light text-base py-8 ml-6 cursor-pointer relative uppercase'>
                    <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                    <span className='w-full bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                    Marca
                    <div className={` py-2 hidden group-hover:flex flex-col bg-main-light dark:bg-main-dark drop-shadow-2xl dark:drop-shadow-[0_10px_10px_rgba(150,150,150,0.25)] text-main-dark dark:text-main-light absolute gap-3 mt-5 px-3`}>
                        {navData?.brand?.map((bra, index) => {
                            return <Link to={`dashboard/brand/${bra}`} key={bra + index} className='p-2 flex flex-row items-center gap-1 uppercase text-justify border border-transparent hover:border-verde-light dark:hover:border-verde-dark rounded-sm'>
                                {bra}
                                <MdOutlineChevronRight className='text-verde-light' />
                            </Link>
                        })}
                    </div>
                </li>
                <li className='group text-main-dark dark:text-main-light text-base py-8 ml-6 cursor-pointer overflow-hidden uppercase'>
                    <span className='w-20 bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                    <span className='w-20 bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                    Deporte
                    <div className={`py-2 hidden group-hover:flex flex-col rounded-sm bg-main-light drop-shadow-2xl dark:drop-shadow-[0_10px_10px_rgba(150,150,150,0.25)] dark:bg-main-dark text-main-dark dark:text-main-light absolute gap-3 mt-5 px-3`}>
                        {navData?.sport?.map((spr, index) => {
                            return <Link to={`dashboard/sport/${spr}`} key={spr + index} className='p-2 flex flex-row  items-center gap-1 uppercase text-justify border border-transparent hover:border-verde-light dark:hover:border-verde-dark'>
                                {spr}
                                <MdOutlineChevronRight className='text-verde-light' />
                            </Link>
                        })}
                    </div>
                </li>
                <li className='group text-main-dark dark:text-main-light  text-base py-8 ml-6 cursor-pointer overflow-hidden uppercase w-fit'>
                    <span className='w-24 bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute top-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                    <span className='w-24 bg-main-dark dark:bg-gris-light h-1 mx-auto rounded-lg absolute bottom-7 opacity-0 group-hover:opacity-100 transition-all duration-300 '></span>
                    Colección
                    <div className={`py-2 hidden group-hover:flex flex-col rounded-sm bg-main-light drop-shadow-2xl dark:drop-shadow-[0_10px_10px_rgba(150,150,150,0.25)] dark:bg-main-dark text-main-dark dark:text-main-light absolute gap-3 mt-5 px-3`}>
                        {navData?.collection?.map((cl, index) => {
                            return <Link to={`dashboard/collection/${cl}`} key={cl + index} className='p-2 flex flex-row items-center gap-1 uppercase text-justify border border-transparent hover:border-verde-light dark:hover:border-verde-dark'>
                                {cl}
                                <MdOutlineChevronRight className='text-verde-light' />
                            </Link>
                        })}
                    </div>
                </li>
            </ul>
        </div>
        
    </nav>
    )
}


export default DashNavBar