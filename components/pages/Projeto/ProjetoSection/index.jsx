import EstruturaSection from "@/components/Estruturas/EstruturaSection";
import EstruturaImagem from "@/components/Estruturas/EstruturaImagem";
import { ProjetoSectionStyledComponent } from "./style";

export default function ProjetoSection( { section, id } ) {
    return (
        <EstruturaSection
            idSection={ `projeto-page-section-${id}` }
            idChangeSection={ id < 2 ? `projeto-page-section-${id+1}` : null }
        >
            <ProjetoSectionStyledComponent>
                <h2>{ section.titulo }</h2>
                <article>
                    <div>
                        <h3> { section.Textos.Text1.subtitulo } </h3>
                        <p> { section.Textos.Text1.texto } </p>
                        <h3> { section.Textos.Text2.subtitulo } </h3>
                        <p> { section.Textos.Text2.texto } </p>
                        <h3> { section.Textos.Text3.subtitulo } </h3>
                        <p> { section.Textos.Text3.texto } </p>
                    </div>
                    <EstruturaImagem src={ section.image } alt={ section.titulo } />
                </article>
            </ProjetoSectionStyledComponent>
        </EstruturaSection>
    )
}