import styled, {createGlobalStyle} from "styled-components";

const GLobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;

        
        min-height: 100vh;
        

        font-size: 1.6rem;
        margin: 0;
    }
   
    a{
        text-decoration: none;
        cursor: pointer;
    }

    ::-webkit-scrollbar-track{
        background-color: #0a0909;
    }
    ::-webkit-scrollbar{
        width: 0.1;
        background-color: #0a0909;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #C4AD8C;
        border-radius: 1.5rem;
    }

`

export default GLobalStyled;