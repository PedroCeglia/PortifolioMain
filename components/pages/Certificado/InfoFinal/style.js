'use client'

import styled from "styled-components"
import style from "@/styles"

export const ArticleInfoFinal = styled.article`
    width: 90%;
    min-height: calc(100vh - 150px);
    padding-top: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    color: ${ style.theme.color.c1 };

    @media all and ( max-width:1000px ) {
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: center;
    }
`

export const ContentInfoFinal = styled.div`
    width: 40%;
    margin: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: ${ style.theme.color.c1 };

    h3 {
        font-size: ${ style.fonts.fontsSize.biggest };
        margin-bottom: 25px;
        text-align: center;
    }

    p {        
        font-size: ${ style.fonts.fontsSize.big };
        margin-bottom: 30px;
    }

    @media all and ( max-width:1000px ) {
        max-width: 700px;
        min-width: 250px;
        width: 90%;
        margin-bottom: 40px;
        
        p {
            margin: 10px;
        }
    }

    @media all and ( max-width:750px ) {
        h3 {
            font-size: ${ style.fonts.fontsSize.bigger };
        }
        p {
            font-size: ${ style.fonts.fontsSize.littleBig };
        }   
    }

    @media all and ( max-width:650px ) {
        h3 {
            font-size: ${ style.fonts.fontsSize.big };
        }
        p {
            font-size: ${ style.fonts.fontsSize.normal };
        }   
    }

    @media all and ( max-width:450px ) {
        h3 {
            font-size: ${ style.fonts.fontsSize.littleBig };
        }
        p {
            font-size: ${ style.fonts.fontsSize.littleSmall };
        }   
    }

`
