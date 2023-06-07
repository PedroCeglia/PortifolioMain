import { EstruturaPaginaStyledComponent, ContentEstruturaPaginaStyled } from "./style"
import Header from "./Header"
import Footer from "./Footer"
export default function EstruturaPagina({children}){
    return(
        <EstruturaPaginaStyledComponent>
            <Header/>
            <ContentEstruturaPaginaStyled>
                {children}
                <Footer/>
            </ContentEstruturaPaginaStyled>
            
        </EstruturaPaginaStyledComponent>
    )
}