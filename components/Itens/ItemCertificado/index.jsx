import {ItemCertificadoStyledComponent} from "./style"

export default function ItemCertificado({ item }){
    return(
        <ItemCertificadoStyledComponent>
            <img src={item.image}/>
            <h3>{item.name}</h3>
            <span>{item.instituicao}</span>
            <span>{item.data}</span>
            <div>
                <a href={item.link} target="_blanc">Abrir Certificado</a>
                <a href={item.descricao}>Descrição</a>
            </div>
        </ItemCertificadoStyledComponent>
    )
}