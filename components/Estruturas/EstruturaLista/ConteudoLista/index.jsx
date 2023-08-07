'use client'

import { useState, useEffect } from "react"
import {ConteudoEstruturaListaStyledComponent} from "./style"
import { getAllCertificadoList, getAllProjectList } from "@/firebase/Database"
import ItemCertificado from "@/components/Itens/ItemCertificado"
import ItemProjetos from "@/components/Itens/ItemProjetos"

export default function ConteudoLista( { type, max6=false } ){

    const [itemList, setItemList] = useState([])
    useEffect(()=>{
        if(type==="Certificados")
            getAllCertificadoList(setItemList, max6)

        if(type==="Projetos")
            getAllProjectList(setItemList, max6)
    },[])

    return(
        <ConteudoEstruturaListaStyledComponent>
            {
                itemList.map( ( item, key ) => {
                    if(type==="Certificados"){
                        return <ItemCertificado key={ key } item={ item } />
                    }
                    if(type==="Projetos"){
                        return <ItemProjetos key={ key } item={ item } />
                    }
                } )
            }
        </ConteudoEstruturaListaStyledComponent>    
    )
}