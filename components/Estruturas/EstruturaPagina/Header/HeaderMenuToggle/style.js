'use client'

import styled from "styled-components"

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

    @media all and (min-width:900px) {
        display: none;
    }
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