import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {
  Navigation, EffectCoverflow
} from 'swiper';
SwiperCore.use([EffectCoverflow, Navigation]);
import "swiper/css/effect-coverflow"


const Banners = (dados) => {
  const banners = [
    {
      id: 1,
      banner: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
    },
    {
      id: 2,
      banner: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
    },
    {
      id: 3,
      banner: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
    },
    {
      id: 4,
      banner: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?size=626&ext=jpg',
    },
  ]
  return (
    <section className="banners">
      {console.log(dados)}
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <Swiper navigation={true} loop={true} effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 0,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}}className="slider">
              {banners.map(dados => (
                <SwiperSlide key={dados.id}><img src={dados.banner} alt="" /></SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}


Banners.getInitialProps = async() => {
  const response = await axios.get('https://frontfroge2109.herokuapp.com/listar/banners');
  return{ dados : response}
}

export default Banners;