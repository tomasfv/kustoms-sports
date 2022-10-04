import React from 'react'
import smLogo from '../assets/smLogo.png'
import running from '../assets/running.jpg'

const KustomPromo = () => {
  return (
    <section className="w-full h-[51rem] lg:h-[37rem] relative mt-10 bg-gradient-to-br from-verde-light to-degAcento-light dark:from-verde-dark dark:to-degAcento-dark flex flex-col lg:flex-row justify-evenly gap-7 items-center lg:px-5 lg:gap-0 group">
      <img
        src={smLogo}
        alt=""
        className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 w-11/12 opacity-40 z-10 lg:w-[31rem] lg:left-1/4 group-hover:blur-sm transition-all duration-500"
      />
      <h2 className="font-bold text-3xl max-w-[36rem] z-20 mt-16 text-main-dark dark:text-main-light">
        Los mejores productos para tu vida deportiva los encuentras en Kustoms
        Sports
      </h2>
      <img
        src={running}
        alt="promo"
        className="w-10/12 lg:w-[46rem] h-96 mx-auto lg:mx-0 z-20 object-cover rounded-md"
      />
    </section>
  )
}

export default KustomPromo
