'use client'

import { SwiperCarrosselContentStyle } from "./style"
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper"

export function SwiperCarrosselContent( { children, slidesPerView=50 } ) {
    
    const swiperModulesList = [ Pagination, Autoplay, Navigation, EffectCoverflow ]
    const swiperCoverflowEffect = { rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }
    const swiperAutoplay = { delay: 2000, disableOnInteraction: false }
    
    return(
        <SwiperCarrosselContentStyle
            modules={ swiperModulesList } 
            pagination={ { clickable: true } } navigation={ true }
            effect={ "coverflow" } coverflowEffect={ swiperCoverflowEffect }
            autoplay={ swiperAutoplay } grabCursor={ true } loop={ true }
            centeredSlides={ true } slidesPerView={ "auto" } spaceBetween={ slidesPerView }   
            
        >
            {children}
        </SwiperCarrosselContentStyle>
    )
}