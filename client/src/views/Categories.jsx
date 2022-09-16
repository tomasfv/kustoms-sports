import { useParams } from "react-router-dom"
import { ProductGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { getByCategory, clearCategory } from "../redux/actions"
import { useEffect, useState } from "react"


const Categories = () => {
    const [products, setProducts] = useState([])
    const llamada = useSelector(state => state.productByCategory)
    const dispatch = useDispatch()
    const category = useParams().category
    const paramValue = useParams().value
    let value = ''
    if (paramValue === 'Hombre') {
        value = 'male'
    } else if (paramValue === 'Mujer') {
        value = 'female'
    } else {
        value = paramValue
    }

    useEffect(() => {
        dispatch(clearCategory())
        dispatch(getByCategory(category, value))
    }, [value])
    useEffect(() => {
        setProducts([...llamada])
    }, [llamada])


    return (
        <main className="mb-10 mt-16 pt-14 min-h-screen">
            <h1 className="text-4xl text-main-dark dark:text-main-light uppercase font-bold ">{paramValue}</h1>
            <ProductGallery productos={products} />
        </main>
    )
}

export default Categories