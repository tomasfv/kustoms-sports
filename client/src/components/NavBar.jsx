import { useState } from 'react'
import { MdExpandMore, MdMenu, MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [isShowing, setIsShowing] = useState(false)

    const handleClick = () => {
        setIsShowing(!isShowing)
        console.log(isShowing)
    }

    return (
        <>
            <nav className='fixed w-full flex flex-row justify-between text-main-dark dark:text-main-light'>
                <img src="" alt="logo-small" />
                <button><MdMenu onClick={handleClick} /></button>
                <div className={`${isShowing ? 'flex' : 'hidden'} absolute top-0 right-0 z-30 h-screen w-3/4  flex-row bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light`}>
                    <button className='w-16 h-16 absolute -left-16 bg-main-light dark:bg-main-dark text-main-dark dark:text-main-light' onClick={handleClick}><MdClose className='mx-auto' /></button>
                    <div className='w-full opacity-100 right-0 relative flex flex-col align-baseline'>
                        <img src="" alt="logo-grande" className='w-fit' />
                        <ul className='flex flex-col text-justify'>
                            <li className='text-main-dark dark:text-main-light text-base py-8 pl-6 border-gris-light border-b w-full'><Link to={'/'}>Hombre</Link></li>
                            <li className='text-main-dark dark:text-main-light text-base py-8 pl-6 border-gris-light border-b w-full'><Link to={'/'}>Mujer</Link></li>
                            <li className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b w-full'><Link to={'/'}>Niños</Link></li>
                            <li className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full '>Marca <MdExpandMore /></li>
                            <li className='text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-row w-full '>Deporte <MdExpandMore /></li>
                        </ul>
                        {/* botones */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar