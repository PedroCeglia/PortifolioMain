import SectionControl from "./SectionControl"
import ChangeSection from "./ChangeSection"
import { EstruturaSectionStyledComponent } from "./style"


export default function EstruturaSection({children, idSection, idChangeSection}){

    const verifyIsOdd = () => (idSection=="intro-section"||idSection=="projetos-section")
    const verifyIsIntro = () => (idSection=="intro-section")
    const isOdd = verifyIsOdd()
    const isIntro = verifyIsIntro()
 
    return(
        
            <SectionControl idSection={idSection}>
                <EstruturaSectionStyledComponent isOdd={isOdd} isIntro={isIntro}>
                    {children}
                    <ChangeSection slug={idChangeSection}/>
                </EstruturaSectionStyledComponent> 
            </SectionControl>
            
                   
    )
}