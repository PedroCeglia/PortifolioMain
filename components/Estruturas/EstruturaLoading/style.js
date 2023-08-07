'use client'

import styled from "styled-components"

export const EstruturaLoadingStyledComponent = styled.div`
    width: 100%;
    min-height: calc(100vh - 150px);
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 280px;
        height: 280px;
        object-fit: cover;
        border-radius: 20px;
    }

    @media all and (max-width:500px){
        img{
            width: 200px;
            height: 200px;
        }
    }
    

`