import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams , } from "react-router-dom";
import { getDetailId, getProductInfo, getStock, postDataBuy } from "../redux/actions";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import swal from'sweetalert2';

const ImageXDataProduct = () => {
  const { isAuthenticated, user } = useAuth0();
  const details = useSelector((state) => state.details);
  const imagenes = useSelector((state) => state.images);
  const stock = useSelector((state) => state.stock);
  const color = useSelector((state) => state.color);
  // console.log(details);
  // console.log(stock);
  const [ordenimg, setOrdenimg] = useState("");
  const [errors, setErrors] = useState(false);
  const params = useParams();
  const id = params.id;
  
 
   const email = user.email
   
  
  



  const [buyProduct, setbuyProduct] = useState({
    id:"",
    name: "",
    collection: "",
    color: "",
    size: "",
    email: "",
  });
   
  function postuserClick() {
    if(buyProduct.size === ""){
      setErrors(!false)

    }
    const dataid = dataBuy.filter(e=>{
      return( e.id == buyProduct.id)
   })
    if(dataid.length){
      swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'El producto ya existe!',
        showConfirmButton: false,
        timer: 1500
      })
      window.history.back ()
    }
    else{
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Producto agregado al Carrito',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(postDataBuy(buyProduct))
      window.history.back ()
    }
    
  }
  function handleSize(e) {
    setErrors(!true)
    
    setbuyProduct({
      ...buyProduct,
      size: e.target.value,
      email:user.email,
      id: e.target.id,
    });
    
  }

  
  console.log(buyProduct, "buy");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductInfo(email));
  }, [dispatch, isAuthenticated, user]);
  useEffect(() => {
    
    setOrdenimg("");
    dispatch(getDetailId(id));
    dispatch(getStock(id));
    
    
    
  }, [dispatch, id, isAuthenticated,user]);

  useEffect(() => {
    setbuyProduct({
      id:"",
      name: details.name,
      collection: details.collection,
      color: color.color,
      size: "",
      email: "",
    });
    window.scrollTo(0, 0);
  }, [details]);

  const dataBuy = useSelector((state) => state.dataBuy);
  console.log(dataBuy,"data")
  const stockgender = stock.filter((e) => {
    return e.gender == details.gender;
  });
console.log(stockgender,"stock")
  function handleImage(e) {
    setOrdenimg(e.target.src);
  }
  console.log(ordenimg, "orden");
  return (
    <div className="flex flex-row mt-[100px] ml-36 space-x-10 dark:bg-main-dark  dark:text-main-light ">
      <div className="flex flex-col items-center  dark:bg-main-dark">
        <div className=" dark:bg-main-dark">
          <img
            src={ordenimg === "" ? imagenes[0] : ordenimg}
            alt="imagen del product"
            width="550px"
            height="550px"
            className="dark:bg-main-dark"
          />
        </div>
        <div className="flex flex-row items-center gap-[20px]">
          {imagenes.map((d) => {
            return (
              <button
                onClick={(e) => handleImage(e)}
                value={d}
                className="hover:shadow-xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 mt-[10px]"
              >
                <img
                  src={d}
                  alt="imagen del product"
                  width="120px"
                  height="120px"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-10 ">
        <div className=" flex text-[30px] ">{details.name}</div>
        <div className=" flex ml-0 pl-0 "> ${details.price}</div>
        <div className=" flex ml-0 pl-0 "> {color.color}</div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-row gap-[5px]">
            <div className="font-bold">Género:</div> {details.gender}
          </div>
          <div className=" flex flex-row gap-[5px]">
            <div className="font-bold">Deporte:</div> {details.sport}
          </div>
          <div className=" flex flex-row gap-[5px]">
            {" "}
            <div className="font-bold">Colección:</div> {details.collection}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex font-bold">Talles disponibles</div>
          <div className="flex flex-row ">
            {stockgender.map((el) => {
              return (
                <div className="flex flex-row"> 
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                  <div>
                   
                    {/* <input type="checkbox" id={el.id} class="peer hidden radio" onClick={(e) => handleSize(e)}  value={el.size} />
                    <label
                      type= "radio"
                      name="check"
                      value= "1"
                      for={el.id}
                      className=" border-[1px] text-[20px] w-[65px] h-[50px] pt-[9px] place-items-center border-[indigo-500/50]
 transition-colors duration-200 ease-in-out peer-checked:bg-main-dark peer-checked:text-main-light peer-checked:border-gray-200 radio"
                    >
                      {" "}
                      {el.size}
                    </label> */}
                    {/* <script> $('input[type="checkbox"]'').on("change", function(){
$("input[name=" " + this.name + " "] ").not(this).prop("checked", false);
});
</script>                 */}
                  <label class=" block input:cursor-pointer">
                    <input type="radio"  name="radio" id={el.id}  onClick={(e) => handleSize(e)}  value={el.size} className="  relative"/>
                    <div>
                    <span className=" flex  w-[30px] h-[30px]   t-[0px] checked:bg-main-black relative input-checked:bg-main-black " >{el.size}</span>
                    </div>
                     
                    </label>
                     
                  </div>
                  
                  
                </div>
              );
            })}
            
          </div>
        </div>
        {errors !== false && <p>Porfavor seleccione una talla</p>}
        {isAuthenticated ? (
          <button
            onClick={postuserClick}
            type="button "
            className="flex break-inside bg-[#2ea44f] text-main-light border-2 border-transparent  px-6 py-3 mb-4 w-fit h-fit pt-1 pb-1 mt-[200px]"
          >
            <div className="m-auto">
              <div className="flex items-center justify-start flex-1 space-x-4 #f8fafc">
                <span className="font-medium ">Add Carrito</span>
              </div>
            </div>
          </button>
        ) : (
          <div className="flex flex-col">
            <p>
              Para poder realizar un pedido,debe registrarse/ingresar en la
              página.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageXDataProduct;
