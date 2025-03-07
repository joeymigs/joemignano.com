"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import Image from "next/image"

import bg1 from "/public/images/work/jg-2020s/intro-carousel-bg-shirouma-blur.jpg"
import ph1 from "/public/images/work/jg-2020s/intro-carousel-hiking.png"
import bg2 from "/public/images/work/jg-2020s/intro-carousel-bg-myoko-blur.jpg"
import ph2 from "/public/images/work/jg-2020s/intro-carousel-myoko.png"
import bg3 from "/public/images/work/jg-2020s/intro-carousel-bg-festivals-blur.jpg"
import ph3 from "/public/images/work/jg-2020s/intro-carousel-festivals.jpg"

import { CarouselNavButtons } from '@/components/Carousel'
import PhoneFrame from "@/components/PhoneFrame"

import css from './Jg2020sIntroHero.module.css'

export default function Jg2020sIntroHero() {
  return (
    <Swiper
      modules={[A11y, Autoplay, EffectFade]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      speed={1000}
      autoplay={{ delay: 4000 }}
      effect="fade"
      a11y={{
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      }}
    >
      <SwiperSlide>
        <Image src={bg3} className={css.HeroBg} alt="Introduction background" />
        <PhoneFrame wrapClass={css.Phone} shimColor="var(--surface-bg-primary)">
          <Image src={ph3} alt="Festivals page" />
        </PhoneFrame>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bg1} className={css.HeroBg} alt="Introduction background" />
        <PhoneFrame wrapClass={css.Phone} shimColor="var(--surface-bg-primary)">
          <Image src={ph1} alt="Hiking in Japan page" />
        </PhoneFrame>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={bg2} className={css.HeroBg} alt="Introduction background" />
        <PhoneFrame wrapClass={css.Phone} shimColor="var(--surface-bg-primary)">
          <Image src={ph2} alt="Myoko page" />
        </PhoneFrame>
      </SwiperSlide>
      <CarouselNavButtons />
    </Swiper>
  )
}
