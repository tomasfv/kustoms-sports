import { PreviewCard } from './index'
import { Link } from 'react-router-dom'

const MainPromo = () => {
    const products = []
    const coleccion = ''
    return (
        <article className='w-full'>
            <Link to={'/'} className='relative'>
                <img src="https://thumbs.dreamstime.com/b/world-football-cup-realistic-d-soccer-ball-sport-poster-banner-flyer-modern-design-concept-font-231514598.jpg" alt="imagen promocional" className='w-full h-[30rem] object-cover' />

            </Link>
            <section className='flex w-10/12 py-3 flex-row gap-10 justify-start xl:justify-center mx-auto mt-24 overflow-x-auto overflow-y-hidden'>
                {products?.forEach((data) => {
                    data.collection === coleccion && (<PreviewCard data={data} />)
                })}
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
                <PreviewCard />
            </section>
        </article>
    )
}

export default MainPromo