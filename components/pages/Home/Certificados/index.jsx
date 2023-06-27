import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import EstruturaCarrossel from "@/components/Estruturas/EstruturaCarrosel";
import { CertificadosContainerStyledComponent } from "./style";
import Link from "next/link";

export default function CertificadosSection(){
    return(
        <EstruturaSection
            idSection={"certificados-section"}
            idChangeSection={"intro-section"}
        >
            <CertificadosContainerStyledComponent>
                <EstruturaCarrossel
                    title={"Certificados"}
                    type={"Certificados"}
                    max6
                />
                <Link href={"/certificados#top-page"}>Ver mais</Link>
            </CertificadosContainerStyledComponent>
        </EstruturaSection>
    )
}