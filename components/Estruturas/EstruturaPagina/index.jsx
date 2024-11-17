'use client'
import { EstruturaPaginaStyledComponent, ContentEstruturaPaginaStyled } from "./style"
import Header from "./Header"
import Footer from "./Footer"
import ScrollToTop from "./ScrollToTop"

export default function EstruturaPagina( { children } ) {
    return (
        <EstruturaPaginaStyledComponent>
                <ScrollToTop/>
                <Header/>
                <ContentEstruturaPaginaStyled>
                    {children}
                    <Footer/>
                </ContentEstruturaPaginaStyled>                
        </EstruturaPaginaStyledComponent>
    )
}