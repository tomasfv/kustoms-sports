import { useEffect } from 'react'
import { useState } from 'react'

const Filters = ({ data }) => {
    const [filterProduct, setFilterProduct] = useState({ brand: null, clotheType: null, gender: null, color: null, collection: null, sport: null, size: null })
    const [filters, setFilters] = useState({ marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], talle: [] })
    useEffect(() => {
        const provisorio = { marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], talle: [] }
        data?.forEach((e) => {
            const keys = Object.keys(provisorio)
            keys.forEach((option) => {
                let tradu
                switch (option) {
                    case 'marca':
                        tradu = 'brand'
                        break;
                    case 'categoria':
                        tradu = 'clotheType'
                        break;
                    case 'genero':
                        tradu = 'gender'
                        break;
                    case 'color':
                        tradu = 'color'
                        break;
                    case 'coleccion':
                        tradu = 'collection'
                        break;
                    case 'deporte':
                        tradu = 'sport'
                        break;
                    default:
                        tradu = 'size'
                        break;
                }
                if (e[tradu] && !provisorio[option].includes(e[tradu])) {
                    provisorio[option].push(e[tradu])
                }
            })

        })
        setFilters({ ...provisorio })

    }, [data])

    const handleSelect = (cat, target) => {
        switch (cat) {
            case 'marca':
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, brand: null })
                } else {
                    setFilterProduct({ ...filterProduct, brand: target.value })
                }
                break;
            case 'categoria':
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, clotheType: null })
                } else {
                    setFilterProduct({ ...filterProduct, clotheType: target.value })
                }
                break;
            case 'genero':
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, gender: null })
                } else {
                    setFilterProduct({ ...filterProduct, gender: target.value })
                }
                break;
            case 'color':
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, color: null })
                } else {
                    setFilterProduct({ ...filterProduct, color: target.value })
                }
                break;
            case 'coleccion':
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, collection: null })
                } else {
                    setFilterProduct({ ...filterProduct, collection: target.value })
                }
                break;
            case 'deporte':
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, sport: null })
                } else {
                    setFilterProduct({ ...filterProduct, sport: target.value })
                }
                break;
            default:
                if (target.value === 'All') {
                    setFilterProduct({ ...filterProduct, size: null })
                } else {
                    setFilterProduct({ ...filterProduct, size: target.value })
                }
                break;
        }
    }

    return (
        <section className='flex flex-row gap-3 flex-wrap w-10/12 justify-center mx-auto mt-14 mb-11'>
            {Object.keys(filters).map((e, index) => {
                return <select name={e} id="{e}" key={e + index} className='md:w-52 w-fit h-14 uppercase text-center text-main-dark dark:text-main-light bg-main-light border-b-main-dark dark:bg-main-dark dark:border-b-main-light border-b-[5px] transition-all duration-300' onChange={(event) => handleSelect(e, event.target)}>
                    <option default disabled className='hidden' value={null}>{e}</option>
                    <option className='uppercase' value='All' >Todos</option>
                    {filters[e]?.map((j, index) => {
                        return <option key={j + index + e} value={j}>{j}</option>
                    })}
                </select>
            })}
        </section >
    )
}

export default Filters