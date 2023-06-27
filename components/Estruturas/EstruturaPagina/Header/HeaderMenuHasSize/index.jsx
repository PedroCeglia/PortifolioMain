'use client'
import { useState, useEffect } from "react"
import { HeaderMenuHasSizeStyledComponent } from "./style"
import { navLinksSections, navLinksPage } from "@/constants/navlinks"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import { usePathname } from "next/navigation"

export default function HeaderMenuHasSize() {

    const pathname = usePathname()

    const [ navLinks, setNavLinks ] = useState( navLinksSections )
    useEffect( () => {
        console.log( pathname )
        if( pathname != "/" )
            setNavLinks( navLinksPage )

        if( pathname == "/" )
            setNavLinks( navLinksSections )

    }, [ pathname ] )

    return (
        <HeaderMenuHasSizeStyledComponent>
            <ul>
                {
                    navLinks.map( ( item, key ) => {
                        return <li key={ key }>
                                { pathname !== "/" ?
                                    <Link href={ item.link } > { item.title } </Link> :
                                    <ScrollLink to={ item.link } smooth duration={ 2000 }> { item.title } </ScrollLink>
                                }
                            </li>
                    } )
                }
            </ul>
        </HeaderMenuHasSizeStyledComponent>
    )
}