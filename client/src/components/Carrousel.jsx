import { PreviewCard } from './index'

const Carrousel = ({ coleccion }) => {
    let products = [{
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }, {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }, {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }, {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }, {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }, {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    }, {
        "clotheType": "shirt",
        "brand": "adidas",
        "name": "camiseton",
        "gender": "x",
        "sport": "running",
        "collection": "primavera",
        "color": "darkred",
        "size": "xxl",
        "image": 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b2c6ff231fe04a809820aec4010a2b1d_9366/Jersey_Visitante_Seleccion_Nacional_de_Mexico_Beige_HD9314_21_model.jpg',
        "stock": "10",
        "price": "13000",
        "promotion": "0.15"
    },]
    return (
        <section className='flex w-10/12 py-3 xl:pl-[16.3rem] flex-row gap-10 justify-start xl:justify-center mx-auto mt-16 overflow-x-auto overflow-y-hidden'>
            {products?.forEach((data) => {
                data.collection === coleccion && (<PreviewCard data={data} />)
            })}
        </section>
    )
}

export default Carrousel