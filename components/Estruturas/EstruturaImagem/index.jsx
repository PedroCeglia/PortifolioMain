'use client'

import { useState, useEffect } from "react"

export default function EstruturaImagem( { src, ...props } ) { 
    
    const [ imageSrc, setImageSrc ] = useState("/assets/gif/loading.gif")
    function listenerLoadImageSrc(){
        const novaImagem = new Image();
        novaImagem.src = src;
        novaImagem.addEventListener('load', () => {
            setImageSrc(novaImagem.src)
        })
    }
    useEffect( () => {
        if(src != null)
            listenerLoadImageSrc()
    }, [ src ] )

    return  < img src={ imageSrc } { ...props } />
}