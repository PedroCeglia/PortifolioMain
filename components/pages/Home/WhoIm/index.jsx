import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import { WhoImContainerStyledComponet } from "./style";

import { whoImTexts } from "@/constants/whoImTexts";

export default function WhoImSection(){
    return(
        <EstruturaSection
            idSection={"about-me-section"}
            idChangeSection={"projetos-section"}
        >
            <WhoImContainerStyledComponet>
                <h2>Quem eu sou?</h2>
                <div>
                    <ul>
                        {
                            whoImTexts.map((text, key)=>{
                                return <li key={key}>{text}</li>
                            })
                        }
                        <li><a>Ler mais</a></li>
                    </ul>
                    <img 
                        src={"/assets/images/developer-3.png"} alt="Developer 2"
                    />
                </div>
            </WhoImContainerStyledComponet>
        </EstruturaSection>
    )
}