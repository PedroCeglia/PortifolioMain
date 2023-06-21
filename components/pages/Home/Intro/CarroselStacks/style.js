'use client'

import style from "@/styles";
import styled from "styled-components";

export const CarroselStacksStyledComponent = styled.div`
    align-self: center;
    
    width: 90vw;
    min-width: 250px;
    margin-bottom: 40px;

    h2{
        color: ${style.theme.rgbaFunctions.getLightColorRGBA(.9)};
        font-family: ${style.fonts.fontsFamily.ubunto};
        font-size: ${style.fonts.fontsSize.big};
        font-weight: 100;

        width: 100%;
        margin-bottom: 20px;
        padding-bottom: 20px;

        border-bottom:2px solid rgba(0,0,0,.3);
    }

`