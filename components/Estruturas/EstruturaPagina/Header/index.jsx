'use client'
import { useState } from "react"
import { HeaderStyledComponent, HeaderPaddingStlye } from "./style"
import HeaderContent from "./HeaderContent"

export default function Header(){
    const [ menuIsOpen, setMenuIsOpen ] = useState( false )
    function handleMenuToggle(){
        setMenuIsOpen( !menuIsOpen )
    }
    return(
        <>        
            <HeaderStyledComponent>
                <HeaderContent menuIsOpen={ menuIsOpen } handleMenuToggle={ handleMenuToggle } />
            </HeaderStyledComponent>
            <HeaderPaddingStlye/>
        </>

    )
}