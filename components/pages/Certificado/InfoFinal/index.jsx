import EstruturaSection from "@/components/Estruturas/EstruturaSection"
import {
    ArticleInfoFinal,
    ContentInfoFinal
} from "./style"

export default function InfoFinalSection( { certificado = null } ) {
    return(
        <EstruturaSection
            idSection={"final-certificado-section"}
        >
            <ArticleInfoFinal>
                <ContentInfoFinal>
                    <h3> { certificado.sections.s2.subtitulo } </h3>
                    <p> { certificado.sections.s2.textos.t1 } </p>
                    <p> { certificado.sections.s2.textos.t2 } </p>
                </ContentInfoFinal>
                <ContentInfoFinal>
                    <h3> { certificado.sections.s2.subtitulo } </h3>
                    <p> { certificado.sections.s2.textos.t1 } </p>
                    <p> { certificado.sections.s2.textos.t2 } </p>
                </ContentInfoFinal>
            </ArticleInfoFinal>
        </EstruturaSection>
    )
}