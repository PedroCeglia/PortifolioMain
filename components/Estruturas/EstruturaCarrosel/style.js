'use client'

import styled from "styled-components";
import style from "@/styles";

export const EstruturaCarrosselStyledComponent = styled.div`
    width: 100%;
    padding: 0 2%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;


    h2{
        font-size: ${style.fonts.fontsSize.bigger};
        color: ${style.theme.color.c1};
        font-family: ${style.fonts.fontsFamily.montserrat};
        margin-bottom: 20px;
    }
    a{
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 5px;
        color: ${style.theme.color.c4};
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.4)};
        transition: all .4s;
    }
    a:hover{
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.7)};
        
    }
`