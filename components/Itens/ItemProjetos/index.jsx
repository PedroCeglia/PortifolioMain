import {ItemProjetosStyledComponent} from "./style"

export default function ItemProjetos({ item }){
    
    const githubIconSrc = "/assets/icons/github.png"
    
    return(
        <ItemProjetosStyledComponent>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name}/>
            <div>
                <a href={item.link} target="_blanc">Abrir</a>
                <a href={`https://github.com/PedroCeglia/${item.repo}`} target="_blanc">Github <img src={githubIconSrc} alt="GitHub Icon"/></a>
                <a href={item.descricao}>Descrição</a>
            </div>
        </ItemProjetosStyledComponent>
    )
}