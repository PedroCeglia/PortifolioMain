'use client'

import { useState, useEffect } from "react"
import { CertificadosListStyledComponent } from "./style"
import { getAllCertificadoList } from "@/firebase/Database"
import ItemCertificado from "../ItemCertificado"

export default function CertificadosList(){

    const [certificadosList, setCertificadosList] = useState([])
    useEffect(()=>{
        getAllCertificadoList(setCertificadosList, true)
    },[])

    return(
        <CertificadosListStyledComponent>
            {certificadosList.map((certificado, key)=><ItemCertificado key={key} certificado={certificado} />)}
        </CertificadosListStyledComponent>
    )
}