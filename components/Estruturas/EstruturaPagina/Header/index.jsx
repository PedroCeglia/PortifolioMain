import { HeaderStyledComponent, HeaderPaddingStlye } from "./style"
import HeaderContent from "./HeaderContent"

export default function Header(){

    return(
        <>        
            <div id="top-page" />
            <HeaderStyledComponent>
                <HeaderContent />
            </HeaderStyledComponent>
            <HeaderPaddingStlye/>
        </>

    )
}