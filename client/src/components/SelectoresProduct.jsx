import { useState } from "react";
import { MdIron, MdNotInterested } from "react-icons/md";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { GiWashingMachine } from "react-icons/gi";
import { useSelector } from "react-redux";

const SelectoresProduct = () => {
  const [desplegable, setDesplegable] = useState(false);
  const [cuidados, setCuidados] = useState(false);
  const [descripcion, setDescripcion] = useState(false);
  const details = useSelector((state) => state.details);
  const imagenes = useSelector((state) => state.images);

  function handleClick(e) {
    setDesplegable(!desplegable);
  }
  function handleClickC(e) {
    setCuidados(!cuidados);
  }
  function handleClickD(e) {
    setDescripcion(!descripcion);
  }
  return (
    <div className=" flex flex-col mt-[100px] ml-16">
      <ul className="flex flex-col text-justify">
        <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col w-full ">
          <div className="flex flex-row p-4 font-bold">
            Descripción{" "}
            <button onClick={(e) => handleClickD(e)}>
              {descripcion === false ? <VscChevronDown /> : <VscChevronUp />}
            </button>{" "}
          </div>
          {descripcion !== false && (
            <div className="flex flex-row gap-[25px]">
              <div className="flex flex-col">
              <div className=" flex flex-col text-[30px] w-[600px] text-border font-bold gap-[15px] ">
               <p>{details.name}</p> 
               <p>diseñada para hinchas de verdad</p>
                </div>
              <p className="w-[600px] mt-[10px]">
                La nueva {details.name} ofrece comodidad en todo momento gracias a su tejido suave con
                tecnología de absorción AEROREADY.
                
                
              </p>
              <p className="w-[600px] mt-[10px]">

                Los detalles en la parte
                interior trasera del cuello están inspirados en la bandera
                nacional que los jugadores representan con tanto orgullo.
                Un producto hecho parcialmente con contenido reciclado generado a
                partir de desechos de producción, tales como recortes de tela, y
                desechos domésticos postconsumo, para evitar un mayor impacto
                ambiental al producir contenido virgen.
              </p>

              </div>
              
              <div>
                {<img
                  src={imagenes[1]}
                  alt="imagen del product"
                  width="450px"
                  height="450px"
          />}
              </div>
            </div>
          )}
        </li>
        <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col gap[5px] w-full ">
          <div className="flex flex-row p-4 font-bold">
            Cuidados{" "}
            <button onClick={(e) => handleClickC(e)}>
              {cuidados === false ? <VscChevronDown /> : <VscChevronUp />}
            </button>{" "}
          </div>
          {cuidados !== false && (
            <div className="flex flex-row gap-[50px]">
              <div>
                <div className="text-[25px] mt-[10px] p-8 font-bold">
                  INSTRUCCIONES DE LAVADO
                </div>
                <ul className="grid-cols-2 mt-[25px]">
                  <li className="flex flex-row mt-[10px]">
                    <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                    No usar blanqueador
                  </li>
                  <li className="flex flex-row mt-[10px]">
                    <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                    No lavar en seco
                  </li>
                  <li className="flex flex-row mt-[10px]">
                    <GiWashingMachine className="w-[30px] h-[30px] mr-[10px]" />
                    Lavar máquina en temperatura fría
                  </li>
                  <li className="flex flex-row mt-[10px]">
                    <MdNotInterested className="w-[30px] h-[30px] mr-[10px]" />
                    No utilizar secadora{" "}
                  </li>
                  <li className="flex flex-row mt-[10px]">
                    <MdIron className="w-[30px] h-[30px] mr-[10px]" />
                    Planchar a temperatura baja{" "}
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-[25px] mt-[10px] w-[550px] p-8 font-bold">
                  INFORMACIÓN ADICIONAL SOBRE EL CUIDADO
                </div>
                <ul className="flex flex-col ml-[20px] gap-[20px]">
                  <li className="list-disc">No usar suavizante</li>
                  <li className="list-disc">Lavar y planchar al revés</li>
                  <li className="list-disc">Retirar inmediatamente</li>
                  <li className="list-disc">Secar en tendedero</li>
                </ul>
              </div>
            </div>
          )}
        </li>
        <li className="text-main-dark dark:text-main-light text-base py-8 pl-6  border-gris-light border-b flex flex-col gap-[5px] w-full ">
          <div className="flex flex-row p-4 font-bold">
            Detalles{" "}
            <button onClick={(e) => handleClick(e)}>
              {desplegable === false ? <VscChevronDown /> : <VscChevronUp />}
            </button>{" "}
          </div>
          {desplegable !== false && (
            <div className="flex flex-row gap-[30px]">
              <div className="gap-[5px]">
                <ul className="flex flex-col gap-[15px]">
                  <li className="list-disc">Corte ajustado</li>
                  <li className="list-disc">Cuello redondo acanalado</li>
                  <li className="list-disc">
                    Tejido de punto doble 100 % poliéster reciclado
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-[15px]">
                  <li className="list-disc">
                    Tecnología de absorción AEROREADY
                  </li>
                  <li className="list-disc">
                    Paneles de malla en los costados
                  </li>
                  <li className="list-disc">Puños acanalados</li>
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SelectoresProduct;
