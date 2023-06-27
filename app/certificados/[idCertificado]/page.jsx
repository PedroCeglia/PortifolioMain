'use client'

import { useState, useEffect } from "react"
import { getCertificadoById } from "@/firebase/Database"

import { InfoIntroSection, InfoFinalSection } from "@/components/pages/Certificado"
import EstruturaLoading from "@/components/Estruturas/EstruturaLoading"

export default function CertificadoPage( { params } ) {
    
    const idCertificado  = params.idCertificado
    const [ certificado, setCertificado ] = useState( null )

    useEffect( () => { 
        if( idCertificado != "undefined" )
            getCertificadoById( setCertificado, idCertificado )
    }, [ idCertificado ] )

    return (
        <>
            { 
                certificado != null ? 
                    <>
                        <InfoIntroSection certificado={ certificado } />
                        <InfoFinalSection certificado={ certificado } />            
                    </> : <EstruturaLoading />
             }
        </>
    )
}