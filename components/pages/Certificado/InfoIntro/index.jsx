import EstruturaSection from "@/components/Estruturas/EstruturaSection"
import EstruturaImagem from "@/components/Estruturas/EstruturaImagem"
import {
    TituloInfoIntro,
    ArticleInfoIntro,
    ContentInfoIntro
} from "./style"

export default function InfoIntro ( { certificado = null } ) {
    return (
        <EstruturaSection
            idSection={ "intro-certificado-section" }
            idChangeSection={ "final-certificado-section" }
        >
            <TituloInfoIntro>{certificado.titulo}
                <a target={ "_blank" } href={ certificado.link }> Ver Certificado </a>
            </TituloInfoIntro>
            <ArticleInfoIntro>
                <ContentInfoIntro>
                    <h3> { certificado.sections.s1.subtitulo } </h3>
                    <ul>
                        <li> { certificado.sections.s1.itens.i1 } </li>
                        <li> { certificado.sections.s1.itens.i2 } </li>
                        <li> { certificado.sections.s1.itens.i3 } </li>
                        <li> { certificado.sections.s1.itens.i4 } </li>
                        <li> { certificado.sections.s1.itens.i5 } </li>
                    </ul>
                </ContentInfoIntro>
                <EstruturaImagem 
                    src={ certificado.image } alt={ certificado.titulo } 
                    title={ certificado.titulo }
                />
            </ArticleInfoIntro>
        </EstruturaSection>
    )
}