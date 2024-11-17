import { HeaderStyledComponent, HeaderPaddingStlye } from "./style"
import HeaderContent from "./HeaderContent"

export default function Header() {

    return(
        <>        
            <HeaderStyledComponent>
                <HeaderContent />
            </HeaderStyledComponent>
            <HeaderPaddingStlye/>
        </>

    )
}