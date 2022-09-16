import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../redux/actions'

const Filters = ({ data }) => {
    const dispatch = useDispatch()
    const [filterProduct, setFilterProduct] = useState({ brand: 'all', clotheType: 'all', gender: 'all', color: 'all', collection: 'all', sport: 'all', size: 'all' })
    const [filters, setFilters] = useState({ marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], talle: [] })
    const [accent, setAccent] = useState({ marca: false, categoria: false, genero: false, color: false, coleccion: false, deporte: false, talle: false })
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
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, brand: 'all' })
                    setAccent({ ...accent, marca: false })
                } else {
                    setFilterProduct({ ...filterProduct, brand: target.value })
                    setAccent({ ...accent, marca: true })
                }
                break;
            case 'categoria':
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, clotheType: 'all' })
                    setAccent({ ...accent, categoria: false })
                } else {
                    setFilterProduct({ ...filterProduct, clotheType: target.value })
                    setAccent({ ...accent, categoria: true })
                }
                break;
            case 'genero':
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, gender: 'all' })
                    setAccent({ ...accent, genero: false })
                } else {
                    setFilterProduct({ ...filterProduct, gender: target.value })
                    setAccent({ ...accent, genero: true })

                }
                break;
            case 'color':
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, color: 'all' })
                    setAccent({ ...accent, color: false })

                } else {
                    setFilterProduct({ ...filterProduct, color: target.value })
                    setAccent({ ...accent, color: true })
                }
                break;
            case 'coleccion':
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, collection: 'all' })
                    setAccent({ ...accent, coleccion: false })

                } else {
                    setFilterProduct({ ...filterProduct, collection: target.value })
                    setAccent({ ...accent, coleccion: true })

                }
                break;
            case 'deporte':
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, sport: 'all' })
                    setAccent({ ...accent, deporte: false })
                } else {
                    setFilterProduct({ ...filterProduct, sport: target.value })
                    setAccent({ ...accent, deporte: true })
                }
                break;
            default:
                if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, size: 'all' })
                    setAccent({ ...accent, size: false })
                } else {
                    setFilterProduct({ ...filterProduct, size: target.value })
                    setAccent({ ...accent, size: true })
                }
                break;
        }
    }
    useEffect(() => {
        dispatch(filterProducts(filterProduct))
    }, [filterProduct])
    return (
        <section className='flex flex-row gap-3 flex-wrap w-10/12 justify-center mx-auto mt-14 mb-11'>
            {Object.keys(filters).map((e, index) => {
                return <select name={e} id="{e}" key={e + index} className={`md:w-52 w-fit h-14 uppercase text-center text-main-dark dark:text-main-light bg-main-light  dark:bg-main-dark ${accent[e] ? 'border-b-verde-dark  dark:border-b-verde-light' : 'border-b-main-dark  dark:border-b-main-light'} border-b-[5px] transition-all duration-300`} onChange={(event) => handleSelect(e, event.target)}>
                    <option default className='uppercase' value={'all'}>{e}</option>
                    <option className='uppercase' value={'all'}>Todos</option>
                    {filters[e]?.map((j, index) => {
                        return <option key={j + index + e} value={j}>{j}</option>
                    })}
                </select>
            })}
        </section >
    )
}

export default Filters