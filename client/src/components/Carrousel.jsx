import { PreviewCard } from './index'

const Carrousel = ({ collection }) => {

    return (
        <section className='flex w-10/12 py-3 xl:pl-[16.3rem] flex-row gap-10 justify-start xl:justify-center mx-auto mt-16 overflow-x-auto overflow-y-hidden h-96'>
            {collection?.map((data, i) => {
                return <PreviewCard key={data.name + i} data={data} />
            })}
        </section>
    )
}

export default Carrousel