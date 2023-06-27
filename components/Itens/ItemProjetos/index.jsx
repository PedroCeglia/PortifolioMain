import {ItemProjetosStyledComponent} from "./style"
import EstruturaImagem from "@/components/Estruturas/EstruturaImagem"
import Link from "next/link"

export default function ItemProjetos({ item }){
    
    const githubIconSrc = "/assets/icons/github.png"
    
    return(
        <ItemProjetosStyledComponent>
            <h3>{item.name}</h3>
            <EstruturaImagem src={item.image} alt={item.name}/>
            <div>
                <a href={item.link} target="_blanc">Abrir</a>
                <a href={`https://github.com/PedroCeglia/${item.repo}`} target="_blanc">Github <img src={githubIconSrc} alt="GitHub Icon"/></a>
                <Link href={`/projetos/${ item.id }#page-top`}>Descrição</Link>
            </div>
        </ItemProjetosStyledComponent>
    )
}