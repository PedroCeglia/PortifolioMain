'use client'

import styled from "styled-components"
import style from "@/styles"

export const WhoImContainerStyledComponet = styled.div`
    padding: 40px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: ${style.theme.color.c1};


    h2{
        font-size: ${style.fonts.fontsSize.bigger};
        font-family: ${style.fonts.fontsFamily.ysabey};
    }

    div{
        width: 90%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    div ul{
        font-size: ${style.fonts.fontsSize.big};
        font-family: ${style.fonts.fontsFamily.montserrat};
        
        max-width: 400px;
        margin-right: 30px;
        margin-top: 30px;

        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        word-spacing: 2px;
    }
    div ul li{
        margin: 10px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    div ul a{
        align-self: flex-end;
        color: ${style.theme.rgbaFunctions.getLightColorRGBA(.7)};
        font-weight: bold;
        cursor: pointer;

    }       
    div ul a:hover{
        color: ${style.theme.rgbaFunctions.getLightColorRGBA(1)};
    }
    div img{
        width: 37%;
        min-width: 250px;
        max-width: 530px;
        object-fit: cover;
    }

    @media all and (max-width:900px){
        div{
            flex-direction: column-reverse;
        }
        div img{
            margin: 20px 0; 
        }
    }
`
