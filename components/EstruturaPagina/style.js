'use client'
import styled from "styled-components";

export const EstruturaPaginaStyledComponent = styled.body`
    width: 100vw;
    height: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const ContentEstruturaPaginaStyled = styled.div`
    min-height: calc(100vh - 160px);
    overflow-y: scroll;

`
