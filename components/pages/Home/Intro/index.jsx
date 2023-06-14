import EstruturaSection from "@/components/EstruturaSection";
import InfoContainer from "./InfoContainer";
import CarroselStacks from "./CarroselStacks";

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
                <CarroselStacks/>
            </IntroSectionStyledComponent>
        </EstruturaSection>
    )
}