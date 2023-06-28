import { ItemCertificadoStyledComponent } from "./style"
import Link from "next/link"
import EstruturaImagem from "@/components/Estruturas/EstruturaImagem"

export default function ItemCertificado( { item } ) {
    return(
        <ItemCertificadoStyledComponent>
            <EstruturaImagem src={ item.image } alt={ item.name } title={ item.name } />
            <h3> { item.name} </h3>
            <span> { item.instituicao }  </span>
            <p> 
                <span> { item.data } </span> 
                <span> { item.horas } Horas </span> 
            </p>
            <div>
                <a href={ item.link } target={ "_blanc" } > Abrir Certificado </a>
                <Link href={ `/certificados/${ item.id }#page-top` }> Descrição </Link>
            </div>
        </ItemCertificadoStyledComponent>
    )
}