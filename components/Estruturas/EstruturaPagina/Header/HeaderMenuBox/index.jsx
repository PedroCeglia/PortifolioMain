import { MenuBox, HeaderLinkScroll } from "./style"
import { navLinks } from "@/constants/navlinks"

export default function HeaderMenuBox({menuIsOpen, handleMenuToggle}){
    return(               
        <MenuBox menuIsOpen={menuIsOpen}>
            {
                navLinks.map(( item, key ) => (
                    <li key={ key } >
                        <HeaderLinkScroll
                            to={ item.link }
                            smooth
                            onClick={handleMenuToggle}
                            duration={ 2000 }
                        > 
                            {item.title} 
                        </HeaderLinkScroll>
                    </li>
                ))
            }
        </MenuBox>
    )
}
