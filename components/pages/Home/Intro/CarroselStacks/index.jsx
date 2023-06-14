'use client'

import { mainStacksList } from "@/constants/stacksLists"
import StacksItem from "./StacksItem"
import { CarroselStacksStyledComponent } from "./style"

import {Swiper, SwiperSlide} from "swiper/react"
import { 
    Navigation,
    Pagination,
    EffectCoverflow,
    Autoplay
} from "swiper"
import 'swiper/css';
import "swiper/css/effect-coverflow";

export default function CarroselStacks(){
    return(
        <CarroselStacksStyledComponent>
            <h2>Algumas das Tecnologias que eu conheço</h2>
            <CarroselStacksContent/>
        </CarroselStacksStyledComponent>
    )
}

function CarroselStacksContent(){
    return(
        <Swiper
            modules={[Pagination, Autoplay, Navigation, EffectCoverflow]}
            
            effect={"coverflow"}
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}

            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={50}

            pagination={{clickable:true}}
            navigation={true}
            loop={true}

            onSlideChange={()=>{console.log('slide change')}}
            onSwiper={(swiper)=>{console.log(swiper)}}
            style={{width:"85%", minWidth:"250px"}}
        >
            {
                mainStacksList.map((stack, key)=>{
                    return(
                        <SwiperSlide 
                            key={key}
                            style={{
                                maxWidth:"200px",
                                minWidth:"150px", 
                            }}
                        >
                            <StacksItem
                                imageSrc={stack.imageSrc}
                                nameAlt={stack.nameAlt}
                            />   
                        </SwiperSlide>  
                    )
                })
            }
        </Swiper>
    )
}
