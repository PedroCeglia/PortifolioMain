import {ItemProjetosStyledComponent} from "./style"

export default function ItemProjetos({projeto}){
    
    const githubIconSrc = "/assets/icons/github.png"
    
    return(
        <ItemProjetosStyledComponent>
            <h3>{projeto.name}</h3>
            <img src={projeto.image} alt={projeto.name}/>
            <div>
                <a href={projeto.link}>Abrir</a>
                <a href={projeto.github}>Github <img src={githubIconSrc} alt="GitHub Icon"/></a>
                <a href={projeto.descricao}>Descrição</a>
            </div>
        </ItemProjetosStyledComponent>
    )
}