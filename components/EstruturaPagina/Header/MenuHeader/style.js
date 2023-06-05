import style from "@/styles"
import styled, { css } from "styled-components"

export const MenuHeaderContainer = styled.nav`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    transition-duration: 0.25s;

    &::before,
    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: #616161;
        transition-duration: 0.25s;
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

export const MenuBox = styled.ul`
    display: block;
    position: fixed;
    z-index: -1;
    top: -100%;
    right: 0;
    width: 100%;
    margin: 0;
    padding: 40px 0;
    list-style: none;
    background-color: ${style.theme.backgroundColor.bc6};
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition: top 1s;

    ${({ menuIsOpen }) => menuIsOpen && `
        top: 100px !important;
        z-index: 1;
    `}
`
export const MenuBoxItem = styled.a`
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;

  &:hover {
    background-color: #cfd8dc;
  }
`