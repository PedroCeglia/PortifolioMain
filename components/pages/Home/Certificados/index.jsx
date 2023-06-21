import EstruturaSection from "@/components/EstruturaSection";

import { 
    CertificadosContainerStyledComponent, 
    CertificadosListStyledComponent 
} from "./style";

import ItemCertificado from "./ItemCertificado";

export default function CertificadosSection(){
    const certificadoTeste = {   
        image:"/assets/images/certificados/React.png",
        name:"Certificado Teste Teste Teste",
        instituicao:"DevMedia",
        data:"04/12/2003",
        link:"",
        descricao:"",
    }
    const certificadosList = [
        certificadoTeste,
        certificadoTeste,
        certificadoTeste,
        certificadoTeste,
        certificadoTeste,
        certificadoTeste,
    ]
    return(
        <EstruturaSection
            idSection={"certificados-section"}
            idChangeSection={"intro-section"}
        >
            <CertificadosContainerStyledComponent>
                <h2>Certificados</h2>
                <CertificadosListStyledComponent>
                    {certificadosList.map((certificado, key)=><ItemCertificado key={key} certificado={certificado} />)}
                </CertificadosListStyledComponent>
            </CertificadosContainerStyledComponent>
        </EstruturaSection>
    )
}