import { HeaderStyledComponent, HeaderPaddingStlye } from "./style"
import HeaderContent from "./HeaderContent"
import HeaderIdPage from "../ScrollToTop"

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