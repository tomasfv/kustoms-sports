import { useParams } from "react-router-dom"
import { ProductGallery } from "../components"
import { useDispatch, useSelector } from "react-redux"
import { getByCategory, clearCategory, getProductInfo } from "../redux/actions"
import { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import DashProdGallery from "../components/DashProdGallery"


const DashCategories = () => {
    const { isAuthenticated, user } = useAuth0()
    const email = user?.email
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
        dispatch(getProductInfo(email))
        dispatch(clearCategory())
        dispatch(getByCategory(category, value))
    }, [value,email])
    useEffect(() => {
        setProducts([...llamada])
    }, [llamada])


    return (
        <main className="mb-10 mt-16 pt-14 min-h-screen">
            <h1 className="text-4xl text-main-dark dark:text-main-light uppercase font-bold ">{paramValue}</h1>
            <DashProdGallery productos={products} />
           
        </main>
    )
}

export default DashCategories;