import { Carrousel } from './index'
import { Link } from 'react-router-dom'
import { getByCategory, clearCategory } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import im1 from '../assets/bannerCam.png'
import im2 from '../assets/qatar.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

const MainPromo = () => {
  const dispatch = useDispatch()
  const collection = useSelector((state) => state.productByCategory)
  const array = [im2, im1]
  useEffect(() => {
    dispatch(clearCategory())
    dispatch(getByCategory('collection', 'Qatar'))
  }, [dispatch])

  return (
    <article className="w-full h-auto">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        className="mySwiper"
      >
        {array?.map((e, index) => {
          return (
            <SwiperSlide>
              <Link to={'/categories/collection/Qatar'}>
                <img
                  key={index}
                  className="object-cover w-full h-[36 rem]"
                  src={e}
                  alt={`imagen de la collecion`}
                />
              </Link>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Carrousel collection={collection} />
    </article>
  )
}

export default MainPromo
