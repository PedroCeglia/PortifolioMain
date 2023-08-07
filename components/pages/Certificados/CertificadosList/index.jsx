import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import EstruturaLista from "@/components/Estruturas/EstruturaLista";


export default function CertificadosListSection(){
    return(
        <EstruturaSection
            idSection={"certificadosList-section"}
            idChangeSection={"github-section"}
        >
            <EstruturaLista
                title={"Certificados"}
                type={"Certificados"}
            />
        </EstruturaSection>
    )
}