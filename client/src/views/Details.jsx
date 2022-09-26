import { useEffect } from "react";
import { getByDate, getComments, getDetailId, getProductInfo } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

import ImageXDataProduct from "../components/Image&DataProduct";
import SelectoresProduct from "../components/SelectoresProduct";
import { Carrousel } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const id = params.id;
  const details = useSelector((state) => state.details);
  const { isAuthenticated, user } = useAuth0
  const email = user?.email
  const dispatch = useDispatch()
  const newest = useSelector(state => state.newest)
  useEffect(() => {
    dispatch(getByDate())
    dispatch(getProductInfo(email))
    dispatch(getDetailId(id));
    // eslint-disable-next-line
    // dispatch(getComments(details.name, details.gender));
  }, [email])
 console.log(details)
  return (
    <div className="flex flex-col  bg-main-light w-10/12 mx-auto dark:bg-main-dark">
      <ImageXDataProduct />
      <SelectoresProduct />
      <div className="flex flex-col  mt-[20px]">

        <Carrousel collection={newest} />
      </div>
    </div>
  );
};

export default Details;
