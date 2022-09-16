import { PreviewCard } from './index'

const Carrousel = ({ collection }) => {

    return (
        <section className='flex w-11/12 py-3  flex-row gap-10 justify-center mx-auto mt-16 overflow-x-auto overflow-y-hidden h-96'>
            {collection?.map((data, i) => (
                i < 5 && <PreviewCard key={data.name + i} data={data} />

            ))}
        </section>
    )
}

export default Carrousel