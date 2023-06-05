'use client'
import styled from "styled-components";
import style from "@/styles";

export const ChangeSectionStyledComponent = styled.div`
    position: absolute;
    bottom: -25px;
    align-self: center;
    border-radius: 10px;
    z-index: 10;

    .link-container{
        height: 50px;
        width: 30px;
        border-radius: 10px;
        background-color: rgba(16, 18, 94, 1);
        
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export const SwitchContainer = styled.div`
    height: 100%;
    width: 100%; 
    border-radius: 10px;
    background-color: ${style.theme.rgbaFunctions.getDarkColorRGBA(.4)};
    border: 2px solid ${style.theme.rgbaFunctions.getLightColorRGBA(.5)};

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    div{
        height: 25px;
        width: 25px; 
        border-radius: 40%;
        border: 2px solid ${style.theme.backgroundColor.bc3};  
        background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.5)};  
    }
`