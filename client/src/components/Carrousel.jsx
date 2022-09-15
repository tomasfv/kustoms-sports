import { PreviewCard } from './index'

const Carrousel = ({ coleccion }) => {
    let products = []
    return (
        <section className='flex w-10/12 py-3 xl:pl-[16.3rem] flex-row gap-10 justify-start xl:justify-center mx-auto mt-16 overflow-x-auto overflow-y-hidden'>
            {products?.forEach((data) => {
                data.collection === coleccion && (<PreviewCard data={data} />)
            })}
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
            <PreviewCard />
        </section>
    )
}

export default Carrousel