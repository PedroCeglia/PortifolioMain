'use client'

import styled from "styled-components"
import style from "@/styles"

export const IntroInfoContainerStyledComponent = styled.div`
    align-self: center;
    
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5px;

    @media all and (max-width:900px){
        flex-direction: column-reverse;
        justify-content: center;
    }
    @media all and (max-width:500px){
        font-size: ${style.fonts.fontsSize.littleSmall};
    }

`
export const IntroMainImage = styled.img`
    min-width: 150px;
    width: 100%;
    max-width: 300px;
    object-fit: cover;
    margin-left: 60px;
    margin-top: 10px;



    @media all and (max-width:900px){
        margin: 20px;
    }
`

export const IntroInfoContentStyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-family: ${style.fonts.fontsFamily.poppins};
    color: ${style.theme.color.c1};

    
    h1{
        font-size: ${style.fonts.fontsSize.bigger};
        font-weight: 300;
        max-width: 500px;
        text-align: center;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div span{
        font-family: ${style.fonts.fontsFamily.ubunto};
        font-size: ${style.fonts.fontsSize.littleBig};
        margin: 0 20px;
        font-weight: 100;
    }
`