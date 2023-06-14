import { 
    IntroInfoContainerStyledComponent, 
    IntroInfoContentStyledComponent 
} from "./style";

import Image from "next/image";

export default function InfoContainer(){
    return(
        <IntroInfoContainerStyledComponent>
            <IntroInfoContentStyledComponent>
                <h1>
                    Olá, eu sou Pedro Ceglia,
                    um desenvolverdor Web!
                </h1>
                <div> 
                    <Image 
                        src="/assets/icons/brasil.png" alt={"Icon Brasil Flag 2"}
                        width={40} height={40}
                    /> 
                    <span>- Rio de Janeiro | RJ | Brasil -</span>
                    <Image 
                        src="/assets/icons/brasil.png" alt={"Icon Brasil Flag 2"} 
                        width={40} height={40}    
                    /> 
                </div>
            </IntroInfoContentStyledComponent>   
            <img 
                width={300} height={300}
                src="/assets/images/developer-pedro.png"
                alt="Intro"
                style={{borderRadius:"20px"}}
            />                
        </IntroInfoContainerStyledComponent>
    )
}