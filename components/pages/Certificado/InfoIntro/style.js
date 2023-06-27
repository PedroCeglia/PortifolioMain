'use client'

import styled from "styled-components"
import style from "@/styles"

export const TituloInfoIntro = styled.h2`
    
    font-size: ${ style.fonts.fontsSize.bigger } ;
    color: ${ style.theme.color.c1 };
    text-align: center;

    width: 100%;
    padding: 0 20px;
    margin: 40px 0;

    display: flex;
    justify-content: center;
    align-items: center;

    a{
        padding: 10px 20px;
        margin-left: 20px;
                
        background-color: ${ style.theme.rgbaFunctions.getLightColorRGBA(.7) };
        border-radius: 10px;

        text-decoration: none;
        color: black;
        font-size: ${ style.fonts.fontsSize.smaller };

        transition: all .3s linear;
        cursor: pointer;

        &:hover{
            color: azure;
            background-color: ${ style.theme.rgbaFunctions.getLightColorRGBA(.2) };

        }
    }

    @media all and (max-width:750px){
        font-size: ${ style.fonts.fontsSize.bigger };
        
        a{
            font-size: ${ style.fonts.fontsSize.smaller };
        }  
    }

    @media all and (max-width:550px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        
        a{
            margin-top: 20px;
        }
    }
`
export const ArticleInfoIntro = styled.article`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    align-self: center;

    img{
        width: 50%;
        object-fit: cover;
        max-width: 550px;
        border-radius: 10px;
        align-self: center;
    }

    @media all and (max-width:1000px){
        flex-direction: column-reverse;
        justify-content: flex-start;
        align-items: center;
    
        img{
            max-width: 700px;
            min-width: 250px;
            width: 90%;
            margin-bottom: 40px;
        }
    } 
`
export const ContentInfoIntro = styled.div`
    width: 40%;
    margin: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: ${ style.theme.color.c1 };

    h3{
        font-size: ${ style.fonts.fontsSize.biggest };
        margin-bottom: 25px;
        text-align: center;
    }

    ul{
        padding-left: 30px;
    }      

    li{        
        font-size: ${ style.fonts.fontsSize.big };
        margin-bottom: 30px;
    }

    @media all and (max-width:1000px){        
        max-width: 700px;
        min-width: 250px;
        width: 90%;
        margin-bottom: 40px;
        
        li{
            margin: 10px;
        }
    }

    @media all and (max-width:750px){
        h3{
            font-size: ${ style.fonts.fontsSize.bigger };
        }
        ul li{
            font-size: ${ style.fonts.fontsSize.littleBig };
        }   
    }

    @media all and (max-width:650px){
        h3{
            font-size: ${ style.fonts.fontsSize.big };
        }
        ul li{
            font-size: ${ style.fonts.fontsSize.normal };
        }   
    }

    @media all and (max-width:450px){
        h3{
            font-size: ${ style.fonts.fontsSize.littleBig };
        }
        ul li{
            font-size: ${ style.fonts.fontsSize.littleSmall };
        }   
    }
`

