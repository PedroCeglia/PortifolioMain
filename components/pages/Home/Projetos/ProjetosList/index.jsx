'use client'

import { useState, useEffect } from "react";
import { ProjetosListStyledComponent } from "./style";

import { getAllProjectList } from "@/firebase/Database";
import ItemProjetos from "../ItemProjetos";

export default function ProjetosList(){

    const [projetosList, setProjetosList] = useState([])
    useEffect(()=>{
        getAllProjectList(setProjetosList, true)
    },[])

    const projetoTeste = {
        name:"Projeto Teste Teste",
        image:"/assets/images/projects/forecast-weather/main.png",
        link:"",
        github:"",
        descricao:""
    }

    return(
        <ProjetosListStyledComponent>
            { projetosList.map((projeto, key)=><ItemProjetos key={key} projeto={projeto}/>) }
            <ItemProjetos projeto={projetoTeste}/>
            <ItemProjetos projeto={projetoTeste}/>
        </ProjetosListStyledComponent>
    )
}