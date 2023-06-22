'use client'

import styled from "styled-components"
import style from "@/styles"

export const CertificadosContainerStyledComponent = styled.div`
    width: 100%;
    padding: 40px 2%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2{
        font-size: ${style.fonts.fontsSize.bigger};
        color: ${style.theme.color.c1};
        font-family: ${style.fonts.fontsFamily.montserrat};
        margin-bottom: 20px;
    }
`

