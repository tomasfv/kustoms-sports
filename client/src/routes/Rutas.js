import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, Details, Categories, DashCategories } from '../views/index'
import { Profile2 } from '../views/Profile2';
import { About, Carrito, Dashboard, Page404} from '../components';
import Payment from '../components/Payment'

const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route exact path={'/'} element={<Home/>} />
                    <Route exact path={'/producto/:id'} element={<Details/>} />
                    <Route exact path={'categories/:category/:value'} element={<Categories/>} />
                    <Route exact path={'dashboard/:category/:value'} element={<DashCategories/>} />
                    <Route exact path={'/profile'} element={<Profile2/>} />
                    <Route exact path={'/carrito'} element={<Carrito/>} />
                    <Route exact path={'/payment'} element={<Payment/>} />
                    <Route exact path={'/dashboard'} element={<Dashboard/>} />
                    <Route exact path={'/about'} element={<About/>} />
                    <Route path='*' element={<Page404/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas