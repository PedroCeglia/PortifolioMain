import { EstruturaLoadingStyledComponent } from "./style";
import EstruturaSection from "../EstruturaSection";

export default function EstruturaLoading() {
    return (
        <EstruturaSection
            idSection={ "loading-section" }
        >
            <EstruturaLoadingStyledComponent>
                <img src={ "/assets/gif/loading.gif" } alt={ "Loading GIF " } />
            </EstruturaLoadingStyledComponent>            
        </EstruturaSection>

    )
}