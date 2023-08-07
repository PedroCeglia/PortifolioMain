'use client'

import styled from "styled-components"
import style from "@/styles"

export const ItemProjetosStyledComponent = styled.div`

    width: 30%;
    margin: 20px 1%;
    min-width: 280px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 10px 20px;
    background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.5)};
    border-radius: 20px;

    h3{
        margin: 10px 5px;
        font-size: ${style.fonts.fontsSize.big};
        font-family: ${style.fonts.fontsFamily.montserrat};
        color: rgba(0,0,0,.8);
    }
    img{
        width: 95%;
        object-fit: cover;
    }
    div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div a{
        
        min-width: 30%;
        margin: 10px 1%;
        padding: 10px;
        text-align: center;
        text-decoration: none;

        background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.8)};
        color: ${style.theme.color.c1};
        border-radius: 5px;

        display: flex;
        justify-content: center;
        align-items: center;
        
        transition: all .4s;
        cursor: pointer;
    } 
    div a:hover{
        background-color: ${style.theme.rgbaFunctions.getColor2RGBA(.6)};
    } 

    div a img{
        width: 18px;
        height: 18px;
        margin-left: 5px;
        margin-top: 1px;
    }

    @media all and (max-width:900px){
        width: 45%;
    }
    @media all and (max-width:620px){
        width: 80%;
    }
`