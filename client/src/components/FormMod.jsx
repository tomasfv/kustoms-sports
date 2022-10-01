import { postAddProduct } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert2";


 const FormMod = ({datos,color}) => {
  const [productos, setProductos] = useState(false);
  const [state, setState] = useState(false);
  const [errors, setErrors] = useState(false);

  const dispatch = useDispatch();
  const [addproduct, setAddProduct] = useState({
    id: color.id,
    clotheType: datos.clotheType,
    brand: datos.brand,
    name: datos.name,
    gender: color.gender,
    sport: datos.sport,
    collection: datos.collection,
    color: color.color,
    size: color.size,
    stock: color.stock,
    price: datos.price,
    promotion: Math.round((datos.promotion*100)),
  });
  useEffect(()=> {
    if (datos.promotion === null){
      setAddProduct({
        ...state,
        promotion: 0
      })
    }
    setAddProduct({
      ...state,
      color: color.color,
      size: color.size,
      stock: color.stock,
      gender: color.gender,
      id: color.id,
    })
  },[color])
  console.log("color", color)
  console.log("datos", datos)
  


  function validate(addproduct) {
    let errors = {};

    // if (addproduct.name.length > 50) {
    //   errors.name = "Inserte un nombre menor a 50 caracteres";
    // }
    if (addproduct.name === "") {
      errors.name = "Inserte un nombre para el producto";
    } else if (!/^[a-zA-Z\s]*$/.test(addproduct.name)) {
      errors.name = "El nombre no puede contener,carácteres o números";
    }
    // if (addproduct.sport.length > 15) {
    //   errors.sport = "Inserte un nombre de deporte menor a 15 caracteres";
    // }
    if (addproduct.sport === "") {
      errors.sport = "Inserte un tipo de  deporte para el producto";
    } else if (!/^[a-zA-Z\s]*$/.test(addproduct.name)) {
      errors.sport =
        "El nombre del deporte no puede contener,carácteres o números";
    }
    // if (addproduct.clotheType.length > 15) {
    //   errors.clotheType = "Inserte un tipo de producto menor a 15 caracteres";
    // }
    if (addproduct.clotheType === "") {
      errors.clotheType = "Inserte un tipo de producto ";
    } else if (!/^[a-zA-Z\s]*$/.test(addproduct.name)) {
      errors.clotheType =
        "El nombre del tipode producto no puede contener,carácteres o números";
    }
    // if (addproduct.brand.length > 15) {
    //   errors.brand = "Inserte una marca menor a 15 caracteres";
    // }
    if (addproduct.brand === "") {
      errors.brand = "Inserte un nombre para la marca del producto";
    }
    // if (addproduct.collection.length > 15) {
    //   errors.collection =
    //     "Inserte una  tipo de colección menor a 15 caracteres";
    // }
    if (addproduct.collection === "") {
      errors.collection =
        "Inserte un nombre para el tipo de colección del producto";
    }
    if (
      addproduct.price < 0 ||
      addproduct.price === 0 ||
      !addproduct.price ||
      !/^[0-9]+$/.test(addproduct.price)
    ) {
      errors.price = "Declarar un precio con valor mayor a 0 ";
    }
    // if (addproduct.color.length > 20) {
    //   errors.color = "Inserte colores menores  a 20 caracteres en total";
    // }
    if (addproduct.color === "") {
      errors.color = "Inserte colores para el producto";
    } else if (!/^[a-zA-Z\s]*$/.test(addproduct.name)) {
      errors.color =
        "El tipo de color del producto no puede contener,carácteres o números";
    }
    if (
      addproduct.stock < 0 ||
      addproduct.stock === 0 ||
      !addproduct.stock ||
      !/^[0-9]+$/.test(addproduct.stock)
    ) {
      errors.stock = "Declarar un precio con valor mayor a 0 ";
    }
    if (
      addproduct.promotion < 0 ||
      addproduct.promotion > 100
    ) {
      errors.promotion = "Declarar un precio con valor entre  0 y 100 ";
    }
    return errors;
  }
  function handleChange(e) {
    setAddProduct({
      ...addproduct,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...addproduct,
        [e.target.name]: e.target.value,

      })
    );
  }
  
  function handleNumber(e) {
    setAddProduct({
      ...addproduct,
      [e.target.name]: parseInt(e.target.value),
    });
    setErrors(
      validate({
        ...addproduct,
        [e.target.name]: parseInt(e.target.value),
      })
    );
  }
  function postProduct() {
    if (
      errors.name ||
      errors.price ||
      errors.stock ||
      errors.clotheType ||
      errors.brand ||
      errors.sport ||
      errors.collection ||
      errors.color ||
      errors.promotion ||
      addproduct.name === "" ||
      addproduct.collection === "" ||
      addproduct.color === "" ||
      addproduct.sport === "" ||
      addproduct.price === 0 ||
      addproduct.clotheType === "" ||
      addproduct.brand === ""
    ) {
      swal.fire({
        position: "top-end",
        icon: "error",
        title: "Error,corriga los errores!",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      console.log("producto", addproduct)
      dispatch(postAddProduct(addproduct));
      swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado !",
        showConfirmButton: false,
        timer: 1000,
      });
      setAddProduct({
        id: "",
        clotheType: "",
        brand: "",
        name: "",
        gender: "Masculino",
        sport: "",
        collection: "",
        color: "",
        size: "S",
        stock: 0,
        price: 0,
        promotion: 0,
      });
      window.location.reload()
    }
  }
 
  
  return (
          <div>

          <form>
              <div class="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                  <label
                    for="first_name"
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nombre del Producto
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Camiseta Selección Argentina"
                    onChange={(e) => handleChange(e)}
                    name="name"
                    value={addproduct.name}
                    />
                  {errors?.name && (
                    <p className="text-[15px] text-[red]">{errors.name}</p>
                    )}
                </div>
                <div>
                  <label
                    for="last_name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Marca
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nike"
                    required
                    onChange={(e) => handleChange(e)}
                    name="brand"
                    value={addproduct.brand}
                    />
                  {errors?.brand && (
                    <p className="text-[15px] text-[red]">{errors.brand}</p>
                  )}
                </div>
                <div>
                  <label
                    for="company"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Colección
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Qatar"
                    required
                    onChange={(e) => handleChange(e)}
                    name="collection"
                    value={addproduct.collection}
                    />
                  {errors?.collection && (
                    <p className="text-[15px] text-[red]">
                      {errors.collection}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    for="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Precio
                  </label>
                  <input
                    type="number"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="$20000"
                    required
                    onChange={(e) => handleNumber(e)}
                    name="price"
                    value={addproduct.price}
                    />
                  {errors?.price && (
                    <p className="text-[15px] text-[red]">{errors.price}</p>
                    )}
                </div>
                <div>
                  <label
                    for="website"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Colores del Producto
                  </label>
                  <input
                    type="text"
                    id="website"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Celeste/Blanco"
                    required
                    onChange={(e) => handleChange(e)}
                    name="color"
                    value={addproduct.color}
                    />
                  {errors?.color && (
                    <p className="text-[15px] text-[red]">{errors.color}</p>
                    )}
                </div>
                <div>
                  <label
                    for="visitors"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Stock{" "}
                  </label>
                  <input
                    type="number"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="5"
                    required
                    onChange={(e) => handleNumber(e)}
                    name="stock"
                    value={addproduct.stock}
                    />
                  {errors?.stock && (
                    <p className="text-[15px] text-[red]">{errors.stock}</p>
                    )}
                </div>
                <div>
                  <label
                    for="visitors"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Descuento{" "}
                  </label>
                  <input
                    type="number"
                    id="visitors"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                    placeholder="0.5"
                    required
                    onChange={(e) => handleNumber(e)}
                    value={addproduct.promotion}
                    name="promotion"
                    />
                  {errors?.promotion && (
                    <p className="text-[15px] text-[red]">{errors.promotion}</p>
                  )}
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Deporte
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Fútbol"
                    required
                    onChange={(e) => handleChange(e)}
                    name="sport"
                    value={addproduct.sport}
                    />
                  {errors?.sport && (
                    <p className="text-[15px] text-[red]">{errors.sport}</p>
                    )}
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                    Tipo de Producto
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Camiseta"
                    required
                    onChange={(e) => handleChange(e)}
                    name="clotheType"
                    value={addproduct.clotheType}
                    />
                  {errors?.clotheType && (
                    <p className="text-[15px] text-[red]">
                      {errors.clotheType}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-row">
                <div className=" flex items-start mb-6 ">
                  Género:
                  <select
                    className="border-[1px] rounded-sm ml-[100px] "
                    onChange={(e) => handleChange(e)}
                    name="gender"
                    value={addproduct.gender}
                    >
                    <option>{addproduct.gender}</option>
                    <option>Femenino</option>
                    <option>Unisex</option>
                  </select>
                </div>
                <div className=" flex ml-[20px] mb-6 ">
                  Talle:
                  <input type="text" value={addproduct.size} onChange={(e)=>handleChange(e)} name="size" className="border-[1px] w-[70px] pl-2 text-s pr-2 rounded-sm ml-[5px] "/>
                </div>
              </div>
            </form>
            <div>
                <button
                  type="submit"
                  className="text-white  text-[30px] ml-[80px] border-[1px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={postProduct}
                >
                  Enviar
                </button>
              </div>
          </div>
            
 )}
 
 export default FormMod;