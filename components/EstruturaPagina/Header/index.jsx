'use client'
import { useState } from "react"
import { HeaderStyledComponent, HeaderPaddingStlye } from "./style"
import HeaderContent from "./HeaderContent"
import HeaderMenuBox from "./HeaderMenuBox"

export default function Header(){
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    function handleMenuToggle(){
        setMenuIsOpen(!menuIsOpen)
    }
    return(
        <>        
            <HeaderStyledComponent>
                <HeaderContent menuIsOpen={menuIsOpen} handleMenuToggle={handleMenuToggle}/>
                <HeaderMenuBox menuIsOpen={menuIsOpen}/>
            </HeaderStyledComponent>
            <HeaderPaddingTop/>
        </>

    )
}


function HeaderPaddingTop(){
    return(
        <HeaderPaddingStlye/>
    )
}