import { MenuBox } from "./style"
import { Link as LinkScroll} from "react-scroll"
import Link from "next/link"

export default function HeaderMenuBox( { menuIsOpen, handleMenuToggle, navLinkList = [], pathname } ) {
    return (               
        <MenuBox menuIsOpen={ menuIsOpen } >
            {
                navLinkList.map( ( item, key ) => {
                    return <li key={ key } >
                            { pathname === "/" ? 
                                <LinkScroll
                                    to={ item.link } smooth duration={ 2000 }
                                    onClick={ handleMenuToggle }                             
                                > 
                                    { item.title } 
                                </LinkScroll> :
                                <Link href={ item.link } >
                                    { item.title }
                                </Link>
                            }
                        </li>
                    }
                )    
            }
        </MenuBox>
    )
}
