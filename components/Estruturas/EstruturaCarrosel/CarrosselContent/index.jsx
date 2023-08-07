'use client'

import { useState, useEffect } from "react"
import { SwiperCarrosselContent } from "./swiper";
import { SwiperSlideCarrosselContent } from "./style";

// Itens
import StacksItem from "@/components/Itens/ItemStack";
import ItemCertificado from "@/components/Itens/ItemCertificado";
import ItemProjetos from "@/components/Itens/ItemProjetos";

import { getAllCertificadoList, getAllProjectList } from "@/firebase/Database";
import { mainStacksList } from "@/constants/stacksLists";
import ItemStack from "@/components/Itens/ItemStack";

export default function CarroselContent( { type } ) {

    const [ carrosselItemList, setCarrosselItemList ] = useState([])
    useEffect(()=>{
        if(type==="Projetos")
            getAllProjectList(setCarrosselItemList, true)
        if(type==="Certificados")
            getAllCertificadoList(setCarrosselItemList, true)
        if(type==="Stacks")
            setCarrosselItemList(mainStacksList)
    },[type])

    return(
        <SwiperCarrosselContent>
            {
                carrosselItemList.map( ( item, key ) => {
                    if(type==="Certificados")
                        return (
                            <SwiperSlideCarrosselContent key={ key } >
                                <ItemCertificado item={item} />
                            </SwiperSlideCarrosselContent>  
                        )

                    if(type==="Projetos")
                        return (
                            <SwiperSlideCarrosselContent key={ key } >
                                <ItemProjetos item={ item } />
                            </SwiperSlideCarrosselContent>  
                        )
                        
                    if(type==="Stacks")
                        return(
                            <SwiperSlideCarrosselContent key={ key } >
                                <ItemStack item={ item } />
                            </SwiperSlideCarrosselContent>  
                        )
                })
            }
        </SwiperCarrosselContent>
    )
}