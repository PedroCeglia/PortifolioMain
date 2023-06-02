'use client'

import styled from "styled-components";
import style from "@/styles";

export const HeaderStyledComponent = styled.header`
    width: 100vw;
    height: 100px;

    z-index: 10;

    background-color: ${style.theme.backgroundColor.bc2};
    color: ${style.theme.color.c1};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 5vw;
`
export const LogoHeaderStyledComponent = styled.h1`
    font-size: ${style.fonts.fontsSize.big};
    font-family: ${style.fonts.fontsFamily.montserrat};
    font-weight: 100;

    color: ${style.theme.color.c1};
`