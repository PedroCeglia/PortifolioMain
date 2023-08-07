import { EstruturaLoadingStyledComponent } from "./style";
import EstruturaSection from "../EstruturaSection";
import EstruturaImagem from "../EstruturaImagem";

export default function EstruturaLoading() {
    return (
        <EstruturaSection
            idSection={ "loading-section" }
        >
            <EstruturaLoadingStyledComponent>
                <EstruturaImagem src={ "/assets/gif/loading.gif" } alt={ "Loading GIF " } />
            </EstruturaLoadingStyledComponent>            
        </EstruturaSection>

    )
}