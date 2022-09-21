import { useSelector } from "react-redux";





const Carrito = ()=>{
    const databuy = useSelector((state) => state.databuy);
   
   
   return(
<div className="mt-[800px]">
    <h1>Carrito</h1>
    <h1>{databuy.name}</h1>
    <h1>Carrito</h1>
    <h1>Carrito</h1>
    <h1>Carrito</h1>
    <h1>Carrito</h1>
</div>
    )

}

export default Carrito