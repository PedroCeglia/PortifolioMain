'use client'

import styled from "styled-components"
import style from "@/styles"

import Link from "next/link"


export const HeaderContentStyledComponent = styled.div`

    width: 100vw;
    height: 100px;
    padding: 10px 5vw;

    border-bottom: 2px solid ${ style.theme.rgbaFunctions.getColor2RGBA(5) };
    background-color: ${ style.theme.rgbaFunctions.getColor1RGBA(1) };
    color: ${ style.theme.color.c1 };

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoHeaderStyledComponent = styled(Link)`
    
    font-size: ${style.fonts.fontsSize.big};
    font-family: ${style.fonts.fontsFamily.montserrat};
    font-weight: 100;
    color: ${style.theme.color.c1};
    text-decoration: none;
`



