import { useEffect } from 'react'
import { useState } from 'react'

const Filters = ({ data }) => {
    const [filterProduct, setFilterProduct] = useState({ brand: [], type: [], gender: [], color: [], collection: [], sport: [], size: [] })
    const [filters, setFilters] = useState({ marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], talle: [] })
    useEffect(() => {
        const provisorio = { marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], talle: [] }
        data?.forEach((e) => {
            if (e.clotheType && !provisorio.categoria.includes(e.clotheType)) {
                provisorio.categoria.push(e.clotheType)
            }
            if (!provisorio.genero.includes(e.gender)) {
                provisorio.genero.push(e.gender)
            }
            if (!provisorio.color.includes(e.color)) {
                provisorio.color.push(e.color)
            }
            if (!provisorio.coleccion.includes(e.collection)) {
                provisorio.coleccion.push(e.collection)
            }
            if (!provisorio.deporte.includes(e.sport)) {
                provisorio.deporte.push(e.sport)
            }
            if (!provisorio.talle.includes(e.size)) {
                provisorio.talle.push(e.size)
            }
            if (!provisorio.marca.includes(e.brand)) {
                provisorio.marca.push(e.brand)
            }
        })
        setFilters({ ...provisorio })

    }, [data])


    return (
        <section className='flex flex-row gap-3 flex-wrap w-10/12 justify-center mx-auto mt-14 mb-11'>
            {Object.keys(filters).map((e) => {
                return <select name={e} id="{e}" className='md:w-52 w-fit h-14 uppercase text-center text-main-dark dark:text-main-light bg-main-light border-b-main-dark dark:bg-main-dark dark:border-b-main-light border-b-[5px] transition-all duration-300'>
                    <option default value={null} >{e}</option>
                    {filters[e]?.map(j => {
                        return <option value={j}>{j}</option>
                    })}
                </select>
            })}
        </section >
    )
}

export default Filters