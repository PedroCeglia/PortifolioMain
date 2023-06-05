'use client'

import styled from "styled-components"
import style from "@/styles"

export const EstruturaSectionStyledComponent = styled.div`
    width: 100vw;
    min-height: ${
        props => props.isIntro?(
            "calc(100vh - 125px)"
        ):(
            "calc(100vh - 25px)"
        )
    };

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    background-color:${
        props => props.isOdd?(
            style.theme.rgbaFunctions.getColor1RGBA(1)
        ):(
            style.theme.rgbaFunctions.getColor1RGBA(.95)
        )
    };;

`