import EstruturaSection from "@/components/EstruturaSection";
import { CertificadosContainerStyledComponent } from "./style";
import CertificadosList from "./CertificadosList";

export default function CertificadosSection(){
    return(
        <EstruturaSection
            idSection={"certificados-section"}
            idChangeSection={"intro-section"}
        >
            <CertificadosContainerStyledComponent>
                <h2>Certificados</h2>
                <CertificadosList/>
            </CertificadosContainerStyledComponent>
        </EstruturaSection>
    )
}