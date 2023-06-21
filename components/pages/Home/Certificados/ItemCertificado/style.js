'use client'

import styled from "styled-components"
import style from "@/styles"

export const ItemCertificadoStyledComponent = styled.div`
    width: 30%;
    margin: 20px 1%;

    border-radius: 20px;

    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color: ${style.theme.rgbaFunctions.getDarkColorRGBA(.8)};
    color: ${style.theme.color.c1};
    font-family: ${style.fonts.fontsFamily.ubunto};

    img{
        width: 95%;
        height: 80%;
        align-self: center;
        object-fit: cover;
        margin: 10px 0;
        border-radius: 10px;
    } 

    h3{
        margin: 7px 15px;
        font-size: ${style.fonts.fontsSize.littleBig};
    }
    span{
        margin: 0 15px 7px;
    }
    div{
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    div a{
        width: 40%;
        text-decoration: none;
        color: ${style.theme.color.c2};
        text-align: center;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.6)};
    }
    div a:hover{
        background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(1)};
    }

    @media all and (max-width:900px){
        width: 45%;
    }
    @media all and (max-width:620px){
        width: 80%;
    }
`