import {ItemCertificadoStyledComponent} from "./style"

export default function ItemCertificado({certificado}){
    return(
        <ItemCertificadoStyledComponent>
            <img src={certificado.image}/>
            <h3>{certificado.name}</h3>
            <span>{certificado.instituicao}</span>
            <span>{certificado.data}</span>
            <div>
                <a href={certificado.link}>Abrir Certificado</a>
                <a href={certificado.descricao}>Descrição</a>
            </div>
        </ItemCertificadoStyledComponent>
    )
}