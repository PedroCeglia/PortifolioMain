import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import InfoContainer from "./InfoContainer";
import EstruturaCarrossel from "@/components/Estruturas/EstruturaCarrosel";

import { 
    IntroSectionStyledComponent
 } from "./style";


export default function IntroSection(){

    return(
        <EstruturaSection
            idSection={"intro-section"}
            idChangeSection={"about-me-section"}
        >
            <IntroSectionStyledComponent>
                <InfoContainer/>
                <EstruturaCarrossel title="Tecnologias que eu domino!" type={"Stacks"}/>
            </IntroSectionStyledComponent>
        </EstruturaSection>
    )
}