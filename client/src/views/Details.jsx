import { useEffect } from "react";
import { getByDate, getComments, getDetailId, getProductInfo, visitedcarrousel } from "../redux/actions"
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
  const { isAuthenticated, user } = useAuth0();
  const email = user?.email
  const dispatch = useDispatch()
  const newest = useSelector(state => state.newest)
  console.log("new?",newest)
  const viewsuser = useSelector(state=> state.viewscarrousel)
  console.log("views", viewsuser)
  useEffect(() => {
    dispatch(getByDate())
    dispatch(visitedcarrousel(email))
    dispatch(getProductInfo(email))
    dispatch(getDetailId(id, email));
    // eslint-disable-next-line
    dispatch(getComments(details.name, details.gender));
  }, [email])

  return (
    <div className="flex flex-col  bg-main-light w-10/12 mx-auto dark:bg-main-dark">
      <ImageXDataProduct />
      <SelectoresProduct />
      <div className="flex flex-col  mt-[20px]">

        <Carrousel collection={viewsuser} />
      {console.log("email",email)}
      </div>
    </div>
  );
};

export default Details;
