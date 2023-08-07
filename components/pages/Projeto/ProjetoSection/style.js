'use client'

import styled from "styled-components"
import style from "@/styles"

export const ProjetoSectionStyledComponent = styled.div`
    width: 100%;
    padding: 40px 0 30px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: ${ style.theme.rgbaFunctions.getLightColorRGBA(.9) };

    h2 {
        font-size: ${ style.fonts.fontsSize.biggest };
        text-align: center;

        padding: 0 10px;
        margin-bottom: 40px;
    }
    article {
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    } 
    article img {
        max-width: 550px;
        width: 100%;
        object-fit: cover;

        align-self: center;
        border-radius:10px;
    }
    article div {
        max-width: 600px;
        width: 100%;
        padding-right: 20px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    article div h3 {
        font-size: ${ style.fonts.fontsSize.big };
        margin-bottom: 15px;
    }
    article div p {
        font-size: ${ style.fonts.fontsSize.littleBig };
        margin-bottom: 30px;
    }

    @media all and ( max-width: 1150px ) {
        article {
            flex-direction: column-reverse;
            justify-content: flex-start;
            align-items: center;
        }
        article img {
            max-width: 700px;
            width: 95%;
            margin-bottom: 30px;
        }
        article div {
            width: 100%;
            font-size: ${ style.fonts.fontsSize.littleBig };
        }
        
    }
    @media all and ( max-width: 500px ) {
        h2 {
            font-size: ${ style.fonts.fontsSize.bigger };
        }
        article div {
            font-size: ${ style.fonts.fontsSize.normal };
        }
    }
    @media all and ( max-width: 400px ) {
        h2 {
            font-size: ${ style.fonts.fontsSize.big };
        }
        article div h3{
            font-size:${ style.fonts.fontsSize.littleBig };
        }
        article div p{
            font-size:${ style.fonts.fontsSize.normal };
        }
    }



`