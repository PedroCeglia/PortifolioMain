import EstruturaSection from "@/components/EstruturaSection";
import { 
    ProjetosContainerStyledComponent,
    ProjetosListStyledComponent
} from "./style";
import ItemProjetos from "./ItemProjetos";

export default function ProjetosSection(){

    const projetoTeste = {
        name:"Projeto Teste Teste",
        image:"/assets/images/projects/forecast-weather/main.png",
        link:"",
        github:"",
        descricao:""
    }

    const projetosList = [
        projetoTeste,
        projetoTeste,
        projetoTeste,
    ]

    return(
        <EstruturaSection
            idSection={"projetos-section"}
            idChangeSection={"certificados-section"}
        >
            <ProjetosContainerStyledComponent>
                <h2>Projetos</h2>
                <ProjetosListStyledComponent>
                    { projetosList.map((projeto, key)=><ItemProjetos key={key} projeto={projeto}/>) }
                </ProjetosListStyledComponent>
            </ProjetosContainerStyledComponent>
        </EstruturaSection>
    )
}