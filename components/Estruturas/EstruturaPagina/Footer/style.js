'use client'
import styled from "styled-components";
import style from "@/styles";

export const FooterStyledComponent = styled.footer`
    width: 100vw;
    height: 60px;

    background-color: ${ style.theme.backgroundColor.bc1};
    color: ${style.theme.color.c1};

    display: flex;
    justify-content: center;
    align-items: center;
`
