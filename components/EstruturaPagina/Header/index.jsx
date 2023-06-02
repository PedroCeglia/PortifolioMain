import { HeaderStyledComponent, LogoHeaderStyledComponent } from "./style"
import MenuHeader from "./MenuHeader"

export default function Header(){
    return(
        <HeaderStyledComponent>
            <LogoHeader/>
            <MenuHeader/>
        </HeaderStyledComponent>
    )
}

function LogoHeader(){
    return(
        <LogoHeaderStyledComponent>
            PedroCeglia | Portifolio
        </LogoHeaderStyledComponent>
    )
}
