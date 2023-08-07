import { HeaderContentStyledComponent, LogoHeaderStyledComponent } from "./style"
import HeaderMenuHasSize from "../HeaderMenuHasSize"
import HeaderMenuToggle from "../HeaderMenuToggle"


export default function HeaderContent() {

    return(
        <HeaderContentStyledComponent>
            <LogoHeaderStyledComponent href={"/"}>
                PedroCeglia | Portifolio
            </LogoHeaderStyledComponent>
            <HeaderMenuToggle />
            <HeaderMenuHasSize />
        </HeaderContentStyledComponent>
    )
}