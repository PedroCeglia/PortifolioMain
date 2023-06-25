'use client'

import styled from "styled-components"
import style from "@/styles"


export const HeaderContentStyledComponent = styled.div`
    width: 100vw;
    height: 100px;

    background-color: ${style.theme.rgbaFunctions.getColor1RGBA(1)};
    color: ${style.theme.color.c1};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 5vw;
    border-bottom: 2px solid ${style.theme.rgbaFunctions.getColor2RGBA(5)};
`


export const LogoHeaderStyledComponent = styled.h1`
    font-size: ${style.fonts.fontsSize.big};
    font-family: ${style.fonts.fontsFamily.montserrat};
    font-weight: 100;

    color: ${style.theme.color.c1};
`

export const MenuToggle = styled.input`
    display: none;
`
export const MenuToggleLabel = styled.label`
    width: 50px;
    height: 50px;

    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const MenuToggleLabelSpan = styled.span`

    display: block;
    position: relative;
    width: 30px;
    height: 2px;
    background-color: #616161;
    transition-duration: .4s;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #616161;
        transition-duration: .4s;
    }

    &::before {
        top: 8px;
        transform: rotate(0deg);
    }

    &::after {
        top: -8px;
        transform: rotate(0deg);
    }

    ${({ menuIsOpen }) => menuIsOpen && `
        transform: rotate(45deg);
        &::before {
            top: 0;
            transform: rotate(0);
        }

        &::after {
            top: 0;
            transform: rotate(90deg);
        }
    `}

`

