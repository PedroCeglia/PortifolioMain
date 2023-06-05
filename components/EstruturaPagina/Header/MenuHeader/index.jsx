'use client'
import { useState } from "react"
import {
    MenuHeaderContainer,
    MenuToggle, MenuToggleLabel, MenuToggleLabelSpan,
    MenuBox, MenuBoxItem
} from "./style"
import { navLinks } from "@/constants/navlinks"

export default function MenuHeader(){
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    function handleMenuToggle(){
        setMenuIsOpen(!menuIsOpen)
    }
    return(
        <MenuHeaderContainer>
            <MenuToggle
                type="checkbox"
                id="menu-toggle-header"
                checked={menuIsOpen}
                onChange={handleMenuToggle}
            />
            <MenuToggleLabel
                htmlFor="menu-toggle-header"
            >
                <MenuToggleLabelSpan
                    menuIsOpen={menuIsOpen}
                ></MenuToggleLabelSpan>
            </MenuToggleLabel>
            
            <MenuBox menuIsOpen={menuIsOpen}>
                {
                    navLinks.map((item,key)=>(
                        <li key={key}>
                            <MenuBoxItem href={item.link}> {item.title} </MenuBoxItem>
                        </li>
                    ))
                }
            </MenuBox>
        </MenuHeaderContainer>
    )
}
