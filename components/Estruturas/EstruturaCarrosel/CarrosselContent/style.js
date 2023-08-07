'use client'

import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import "swiper/css/effect-coverflow";

export const SwiperCarrosselContentStyle = styled(Swiper)`
    width: 95%;
    min-width: 280px;
    max-width: 1200px;
`
export const SwiperSlideCarrosselContent = styled(SwiperSlide)`
    flex-shrink: 1;
    width: 100%;
`
