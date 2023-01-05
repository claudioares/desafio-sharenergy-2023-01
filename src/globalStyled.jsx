import styled, {createGlobalStyle} from "styled-components";

const GLobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        
        font-size: 1.6rem;
        margin: 0;
    }

`
export const ContainerSiderBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding-top: 7.6rem;
    min-width: 20%;
    min-height: 100%;

    background-color: #1B2F36;
`

export default GLobalStyled;