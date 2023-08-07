'use client'

import style from "@/styles"
import styled from "styled-components"

export const HeaderMenuHasSizeStyledComponent = styled.nav`
    
    font-size: ${ style.fonts.fontsSize.big };

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }

    li a {
        padding: 5px 10px;
        margin: 0 5px;

        color: ${ style.theme.color.c1 };
        cursor: pointer;
        text-decoration: none;
        transition: all .4s;
    }

    li a:hover {
        color: ${ style.theme.rgbaFunctions.getLightColorRGBA(.4) };
    }

    @media all and ( max-width: 1160px ) {
        font-size: ${ style.fonts.fontsSize.littleBig };
    }

    @media all and ( max-width: 1000px ) {
        font-size: ${ style.fonts.fontsSize.normal };
    }

    @media all and ( max-width: 900px ) {
        display: none;
    }
`
