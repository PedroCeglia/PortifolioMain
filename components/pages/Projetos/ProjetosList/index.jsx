import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import EstruturaLista from "@/components/Estruturas/EstruturaLista";


export default function ProjetosListSection(){
    return(
        <EstruturaSection
            idSection={"projetoList-section"}
            idChangeSection={"github-section"}
        >
            <EstruturaLista
                title={"Projetos"}
                type={"Projetos"}
            />
        </EstruturaSection>
    )
}