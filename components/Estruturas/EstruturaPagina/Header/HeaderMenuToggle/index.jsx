'use client'

import { useState, useEffect } from "react"
import { MenuToggle, MenuToggleLabel, MenuToggleLabelSpan } from "./style"
import HeaderMenuBox from "./HeaderMenuBox"

import { usePathname } from "next/navigation"
import { navLinksSections, navLinksPage } from "@/constants/navlinks"

export default function HeaderMenuToggle() {
    
    const pathname = usePathname()
    const [ navLinkList, setNavLinkList ] = useState( navLinksSections )
    useEffect( () => {

        if( pathname !== "/")
            setNavLinkList(navLinksPage)

        if( pathname === "/" )
            setNavLinkList(navLinksSections)

    }, [ pathname ] )

    const [ menuIsOpen, setMenuIsOpen ] = useState( false )
    function handleMenuToggle() {
        setMenuIsOpen( !menuIsOpen )
    }

    return (
        <>        
            <MenuToggle
                type={ "checkbox" }
                id={ "menu-toggle-header" }
                checked={ menuIsOpen }
                onChange={ handleMenuToggle }
            />
            <MenuToggleLabel htmlFor={ "menu-toggle-header" } >
                <MenuToggleLabelSpan menuIsOpen={ menuIsOpen } />
            </MenuToggleLabel>
            
            <HeaderMenuBox 
                menuIsOpen={ menuIsOpen } handleMenuToggle={ handleMenuToggle } 
                navLinkList={ navLinkList } pathname={ pathname } />
        </>

    )
}