'use client'

import EstruturaLoading from "@/components/Estruturas/EstruturaLoading"
import { ProjetoSection } from "@/components/pages/Projeto"
import { getProjectById } from "@/firebase/Database"
import { useState, useEffect } from "react"


export default function ProjetoPage( { params } ) {

    const idProjeto = params.idProjeto
    const [ projeto, setProjeto ] = useState( null )

    useEffect( () => { 
        if( idProjeto != "undefined" )
            getProjectById( setProjeto, idProjeto )
    }, [ idProjeto ] )

    const [ projetoSections, setProjetoSections ] = useState( [] )
    useEffect( () => {
        if( projeto != null ){
            const s1 = projeto.sections.s1
            const s2 = projeto.sections.s2
            const s3 = projeto.sections.s3
            setProjetoSections( [ s1, s2, s3] )
        }
    }, [ projeto ] )
    
    return (
        <>
            {
                projeto != null && projetoSections != [] ? 
                    projetoSections.map( ( section, key ) => {
                        console.log(key)
                        return <ProjetoSection key={ key } section={ section } id={ key } />
                    })
                    : <EstruturaLoading />
            }
        </>
    )
}