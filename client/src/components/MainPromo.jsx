import { Carrousel } from './index'
import { Link } from 'react-router-dom'

const MainPromo = () => {
    return (
        <article className='w-full'>
            <Link to={'/'} className='relative'>
                <img src="https://thumbs.dreamstime.com/b/world-football-cup-realistic-d-soccer-ball-sport-poster-banner-flyer-modern-design-concept-font-231514598.jpg" alt="imagen promocional" className='w-full h-[30rem] object-cover' />
            </Link>
            <Carrousel />
        </article>
    )
}

export default MainPromo