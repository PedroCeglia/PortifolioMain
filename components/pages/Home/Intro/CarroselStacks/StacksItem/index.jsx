'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { Tilt } from "react-tilt"

import { useSwiperSlide } from "swiper/react"

export default function StacksItem({imageSrc, nameAlt}){

    const swiperSlide = useSwiperSlide()


    useEffect(()=>{

    },[swiperSlide.isActive])
        
    if(swiperSlide.isActive){
        return <ItemActive imageSrc={imageSrc} nameAlt={nameAlt}/> 
    } else{
        return <ItemDesactive imageSrc={imageSrc} nameAlt={nameAlt}/>
    }    
}

function ItemActive({imageSrc, nameAlt}){
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
                width={90}
                height={90}
                style={{
                    width:"80%",
                    height:"80%"
                }}
            />                
        </Tilt>
    )
}
function ItemDesactive({imageSrc, nameAlt}){

    const styleTilt = {
        
        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        backgroundColor:"rgba(0,0,0,.5)",
        cursor:"pointer",

        padding:"20px 10px"

    }

    return(
        <div
            style={styleTilt}
        >
            <Image
                src={imageSrc}
                alt={nameAlt}
                title={nameAlt}
                width={90}
                height={90}
                style={{
                    width:"80%",
                    height:"80%"
                }}
            />                
        </div>
    )
}