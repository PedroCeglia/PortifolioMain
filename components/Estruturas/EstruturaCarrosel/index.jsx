import CarroselContent from "./CarrosselContent"
import { EstruturaCarrosselStyledComponent } from "./style"

export default function EstruturaCarrossel( { title, type } ) {
    return (
        <EstruturaCarrosselStyledComponent>
            <h2>{title}</h2>
            <CarroselContent type={type}/>
        </EstruturaCarrosselStyledComponent>
    )
}