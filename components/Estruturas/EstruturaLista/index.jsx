import { EstruturaListaStyledComponent } from "./style";
import ConteudoLista from "./ConteudoLista";

export default function EstruturaLista( { title, type, max6 } ) {
    return(
        <EstruturaListaStyledComponent>
            <h2> { title } </h2>
            <ConteudoLista type={type} max6={max6} />
        </EstruturaListaStyledComponent>

    )
}

