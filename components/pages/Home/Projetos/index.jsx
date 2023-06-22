import EstruturaSection from "@/components/EstruturaSection";
import { ProjetosContainerStyledComponent } from "./style";
import ProjetosList from "./ProjetosList";

export default function ProjetosSection() {
    return(
        <EstruturaSection
            idSection={"projetos-section"}
            idChangeSection={"certificados-section"}
        >
            <ProjetosContainerStyledComponent>
                <h2>Projetos</h2>
                <ProjetosList/>
            </ProjetosContainerStyledComponent>
        </EstruturaSection>
    )
}