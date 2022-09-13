import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home } from '../views/index'
const Rutas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/:id'} element={<Details/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rutas