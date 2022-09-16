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
        console.log(provisorio)
    }, [])

    return (
        <section>

        </section>
    )
}

export default Filters