import styled from "styled-components";
import bg from '../../assets/Login/bg.svg';


export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;

    background-image:linear-gradient(#0000008f,#0000005e), url(${bg});
    background-repeat: no-repeat;
    background-size:cover;

    height: 100vh;
`
export const Body = styled.div`
    height: 100%;
    width: 100%;
    padding: 2.4rem 48.3rem;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    background: rgba(27, 47, 54, 0.61);
    border-radius: 1rem;

    min-width: 47.3rem;
    height: 100%;

    h1{
        margin-bottom: 7.2rem;
        font-style: normal;
        font-weight: 700;
        font-size: 2.8rem;
        line-height: 4.4rem;

        text-align: center;

        color: #E4E8E8;
    }
    button{
        min-width: 32.0rem;
        height: 4.8rem;

        background-color: #00A2A2;
        color:  #E4E8E8;
        border-radius: 1rem;

        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }

`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    input{
        all: unset;
        text-align: center;
        color:  #E4E8E8;
        border-bottom: 1px solid #FFFFFF;

        padding: 1rem 0;

        &::placeholder{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
            text-align: center;
            line-height: 3.3rem;
    
            color: rgba(255, 255, 255, 0.33);
        }
    }

    margin-bottom: 5rem;
`