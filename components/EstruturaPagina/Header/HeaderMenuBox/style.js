'use client'

import style from "@/styles"
import styled from "styled-components"

export const MenuBox = styled.ul`
    z-index: -1;
    position: fixed;
    top: -100%;
    right: 0;

    width: 100%;
    margin: 0;
    padding: 40px 0;
    list-style: none;
    
    background-color: ${style.theme.rgbaFunctions.getLightColorRGBA(.9)};

    box-shadow: 2px 2px 6px rgba(0, 0, 0, .6);
    transition: top 1s;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

    ${({ menuIsOpen }) => menuIsOpen && `
        top: 100px !important;
    `}
`
export const MenuBoxItem = styled.a`
  display: block;
  padding: 12px 24px;
  color: ${style.theme.color.c2};
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition-duration: 0.25s;

  &:hover {
    background-color: #cfd8dc;
  }
`