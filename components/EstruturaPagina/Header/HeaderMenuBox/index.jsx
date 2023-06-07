import { MenuBox, MenuBoxItem } from "./style"
import { navLinks } from "@/constants/navlinks"

export default function HeaderMenuBox({menuIsOpen}){
    return(               
        <MenuBox menuIsOpen={menuIsOpen}>
            {
                navLinks.map((item,key)=>(
                    <li key={key}>
                        <MenuBoxItem href={item.link}> {item.title} </MenuBoxItem>
                    </li>
                ))
            }
        </MenuBox>
    )
}
