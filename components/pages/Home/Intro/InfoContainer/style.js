'use client'

import styled from "styled-components"
import style from "@/styles"

export const IntroInfoContainerStyledComponent = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 15px;
    margin-bottom: 30px;
`
export const IntroInfoContentStyledComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    font-family: ${style.fonts.fontsFamily.poppins};
    color: ${style.theme.color.c1};

    margin-right: 60px;
    
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