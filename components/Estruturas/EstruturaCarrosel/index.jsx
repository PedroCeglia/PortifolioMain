import CarroselContent from "./CarrosselContent"
import { EstruturaCarrosselStyledComponent } from "./style"

export default function EstruturaCarrossel( { title = null, type } ) {
    return (
        <EstruturaCarrosselStyledComponent>
            { title != null && <h2> { title } </h2> }
            <CarroselContent type={type}/>
        </EstruturaCarrosselStyledComponent>
    )
}