'use client'

import Image from "next/image"
import { Tilt } from "react-tilt"

import { useSwiperSlide } from "swiper/react"

export default function ItemStack( { item } ) {

    const swiperSlide = useSwiperSlide()
        
    if(swiperSlide.isActive){
        return <ItemActiveTilt imageSrc={item.imageSrc} nameAlt={item.nameAlt}/> 
    } else {
        return <ItemDesactiveTilt imageSrc={item.imageSrc} nameAlt={item.nameAlt}/>
    }    
}

function ItemActiveTilt( { imageSrc, nameAlt } ) {
    
    const optionsTiltDefault = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    const styleTilt = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        backgroundColor:"rgba(0,0,0,.3)",
        borderRadius:"10px",
        cursor:"pointer",

        padding:"20px 10px",
        maxWidth:"250px"
    }
    return(
        <Tilt
            options={optionsTiltDefault}
            style={styleTilt}
        >
            <Image
                src={imageSrc}
                alt={nameAlt}
                title={nameAlt}
                width={180}
                height={180}
            />                
        </Tilt>
    )
}
function ItemDesactiveTilt( { imageSrc, nameAlt } ) {

    const styleTilt = {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        backgroundColor:"rgba(0,0,0,.5)",
        cursor:"pointer",

        padding:"20px 10px",
        maxWidth:"200px"
    }
    return(
        <div
            style={styleTilt}
        >
            <Image
                src={imageSrc}
                alt={nameAlt}
                title={nameAlt}
                width={180}
                height={180}
            />                
        </div>
    )
}