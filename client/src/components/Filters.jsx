import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../redux/actions'
import { MdExpandMore } from 'react-icons/md'

const Filters = ({ data }) => {
    const dispatch = useDispatch()
    const [filterProduct, setFilterProduct] = useState({ brand: 'all', clotheType: 'all', gender: 'all', color: 'all', collection: 'all', sport: 'all', /* size: 'all' */ })
    const [filters, setFilters] = useState({ marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], /* talle: [] */ })
    const [accent, setAccent] = useState({ marca: false, categoria: false, genero: false, color: false, coleccion: false, deporte: false, /* talle: false */ })

    const translate = (word) => {
        switch (word) {
            case 'marca':
                return 'brand'
            case 'categoria':
                return 'clotheType'
            case 'genero':
                return 'gender'
            case 'color':
                return 'color'
            case 'coleccion':
                return 'collection'
            case 'deporte':
                return 'sport'
            default:
                /* tradu = 'size' */
                break;
        }
    }
    useEffect(() => {
        const provisorio = { marca: [], categoria: [], genero: [], color: [], coleccion: [], deporte: [], /* talle: [] */ }
        data?.forEach((e) => {
            const keys = Object.keys(provisorio)
            keys.forEach((option) => {
                const tradu = translate(option)
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
                /* if (target.value === 'all') {
                    setFilterProduct({ ...filterProduct, size: 'all' })
                    setAccent({ ...accent, talle: false })
                } else {
                    setFilterProduct({ ...filterProduct, size: target.value })
                    setAccent({ ...accent, talle: true })
                } */
                break;
        }
    }
    // ${filterProduct[translate(e)] === 'all' ? 'text-main-light dark:text-main-dark' : 'text-main-dark dark:text-main-light'} 

    useEffect(() => {
        dispatch(filterProducts(filterProduct))
    }, [filterProduct])
    return (
        <section className='flex flex-row gap-3 flex-wrap w-10/12 justify-center mx-auto mt-14 mb-11'>
            {Object.keys(filters).map((e, index) => {
                return <div className='relative'>

                    <select name={e} id={e} key={e + index} className={` z-20 md:w-52 w-fit h-14 uppercase text-center
                    ${filterProduct === 'all' ? 'text-main-light dark:text-main-dark' : 'text-main-dark dark:text-main-light'} 
                    bg-main-light  dark:bg-main-dark  border-b-[5px] `} onChange={(event) => handleSelect(e, event.target)}>
                        <option className={`uppercase `} defaultValue value={'all'}>{e}</option>
                        {filters[e]?.map((j, index) => {
                            return <option key={j + index + e} value={j}>{j}</option>
                        })}
                    </select>
                    <p className={`z-10 absolute uppercase flex items-center ${filterProduct[translate(e)] === {e} ? 'top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' : 'text-xs'} cursor-default transition-[font-size] duration-500 `}>{e} <MdExpandMore className={` uppercase ${filterProduct[translate(e)] === 'all' ? 'block' : 'hidden'} cursor-default transition-all duration-700 `} /></p>

                </div>

            })}
        </section >
    )
}

export default Filters