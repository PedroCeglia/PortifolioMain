'use client'

import styled from "styled-components";
import style from "@/styles";

export const HeaderStyledComponent = styled.header`
    width: 100vw;
    height: 100px;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 10;

    background-color: ${style.theme.rgbaFunctions.getColor1RGBA(1)};
    color: ${style.theme.color.c1};

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 2px solid ${style.theme.rgbaFunctions.getColor2RGBA(5)};
`

export const HeaderPaddingStlye = styled.div`
    padding: 50px;

`
