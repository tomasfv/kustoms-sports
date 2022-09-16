import { useState, useEffect } from "react"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { PreviewCard, Filters } from "./index"

const ProductGallery = ({ productos }) => {
    const [nShowing, setNShowing] = useState(20)
    const [page, setPage] = useState(1)
    const totalProducts = productos?.length
    const lastShowing = page * nShowing
    const firstShowing = lastShowing - nShowing
    const amountPages = []
    let onDisplay = []

    for (let p = 0; p < Math.ceil(totalProducts / nShowing); p++) {
        amountPages.push(p)
    }

    productos && (onDisplay = productos.slice(firstShowing, lastShowing))
    const handleClick = (numero) => {
        setPage(numero)
    }

    const handleLeftClick = () => {
        page > 1 && (
            setPage(page - 1)
        )
    }
    const handleRightClick = () => {
        page < amountPages.length && (
            setPage(page + 1)
        )
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [page])
    const Pagination = () => (

        <div className="mt-6 flex flex-row mx-auto justify-center gap-6 items-center">
            <button onClick={handleLeftClick} disabled={page === 1 ? true : false} className="text-main-dark dark:text-main-light cursor-pointer hover:bg-opacity-10 hover:bg-main-dark dark:hover:bg-main-light dark:hover:text-main-dark p-2 rounded-full">
                <MdChevronLeft />
            </button>
            {amountPages && amountPages.map((e, index) => {
                e = e + 1
                return (
                    <button key={index}
                        onClick={() => handleClick(e)}
                        className={`text-main-dark dark:text-main-light ${e == page ? ' text-main-dark bg-verde-light dark:bg-verde-dark' : 'hover:bg-opacity-10 hover:bg-main-dark dark:hover:bg-main-light dark:hover:text-main-dark'} p-2 rounded-full `}
                    >
                        {e}
                    </button>
                )
            })}
            <button onClick={handleRightClick} disabled={page === amountPages.length ? true : false} className="text-main-dark dark:text-main-light cursor-pointer hover:bg-opacity-10 hover:bg-main-dark dark:hover:bg-main-light dark:hover:text-main-dark p-2 rounded-full">
                <MdChevronRight onClick={handleRightClick} className="text-main-dark dark:text-main-light cursor-pointer " />
            </button>
        </div >
    )


    return (
        <section>
            <Filters data={productos} />
            <section className="w-10/12 my-5 mx-auto flex flex-row flex-wrap gap-6 justify-center">

                {onDisplay?.map((data, index) => (
                    <PreviewCard data={data} key={index} />
                ))}

            </section>
            <Pagination />
        </section>
    )
}

export default ProductGallery