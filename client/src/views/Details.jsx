import { useEffect } from "react";
import { getByDate } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

import ImageXDataProduct from "../components/Image&DataProduct";
import SelectoresProduct from "../components/SelectoresProduct";
import { Carrousel } from "../components";

const Details = () => {
  const dispatch = useDispatch()
  const newest = useSelector(state => state.newest)
  useEffect(() => {
    dispatch(getByDate())
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex flex-col  bg-main-light w-10/12 mx-auto">
      <ImageXDataProduct />
      <SelectoresProduct />
      <div className="flex flex-col  mt-[20px]">

        <Carrousel collection={newest} />
      </div>
    </div>
  );
};

export default Details;
