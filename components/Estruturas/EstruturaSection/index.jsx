import SectionControl from "./SectionControl"
import ChangeSection from "./ChangeSection"
import { EstruturaSectionStyledComponent } from "./style"

export default function EstruturaSection( { children, idSection, idChangeSection = null } ) {

    const verifyIsOdd = () => ( 
        idSection == "intro-section" ||
        idSection == "projetos-section" ||
        idSection == "intro-certificado-section"
    )
    const isOdd = verifyIsOdd()

    const verifyIsIntro = () => ( idSection == "intro-section" )
    const isIntro = verifyIsIntro()
 
    return(
            <SectionControl idSection={ idSection } >
                <EstruturaSectionStyledComponent isOdd={ isOdd } isIntro={ isIntro } >
                    { children }
                    { idChangeSection != null && <ChangeSection slug={ idChangeSection } /> }
                </EstruturaSectionStyledComponent> 
            </SectionControl>           
    )
}