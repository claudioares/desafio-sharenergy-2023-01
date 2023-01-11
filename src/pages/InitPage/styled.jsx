import styled from "styled-components";


export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;

    background: rgb(17,68,75);
    background: radial-gradient(circle, rgba(17,68,75,1) 18%, rgba(17,68,75,1) 36%, rgba(17,68,75,1) 53%, rgba(5,36,40,1) 100%);
    background-repeat: no-repeat;
    background-size:cover;

    height: 100vh;
`
export const Body = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;


    h1{
        font-style: normal;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 4.4rem;

        text-align: center;

        color: #E4E8E8;
    }

    h3{
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.5rem;

        color: #E4E8E8;

        width: 65%;
        margin-bottom: 3.5rem;

        text-align: center;
    }

`
export const DivLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;

`
// forms
export const FormLogin = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    
    min-width: 47.3rem;
    height: 100%;
    width: 50%;
`
export const FormSign = styled.form`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    background-color: #1B2F36;

    min-width: 47.3rem;
    height: 100%;
    width: 50%;

    left:50%;
`
// 
export const DivInput = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    input{
        all: unset;
        text-align: center;
        color:  #E4E8E8;
        border-bottom: 1px solid #FFFFFF;

        padding: 1rem;
        min-width: 30rem;
       

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
export const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 23rem;
    height: 6rem;

    margin-bottom: 5%;

    button{
        all: unset;
        
        display: flex;
        align-items: center;
        justify-content: center;

        min-width: 23rem;
        height: 6rem;

        background-color: #00A2A2;
        color:  #ffffff;
        border-radius: 1rem;
        
        cursor: pointer;

        bottom: 16%;

        transition-timing-function: ease;
        transition-duration: 0.5s;
        
        &:hover{
            
            transform: translateY(-15px);
           
        }
    }

`
export const ImgUser = styled.div`
    position: absolute;
    top: 11%;
    left: 4%;

    img{
        width: 1.3rem;
        height: 2.1rem;
    }
`
export const ImgEmailLogin = styled.div`
    position: absolute;
    bottom: 58%;
    left: 4%;

    img{
        width: 1.3rem;
        height: 1.4rem;
    }
`
export const ImgEmail = styled.div`
    position: absolute;
    bottom: 38%;
    left: 4%;

    img{
        width: 1.3rem;
        height: 1.4rem;
    }
`
export const ImgPassword = styled.div`
    position: absolute;
    bottom: 2%;
    left: 4%;

    img{
        width: 1.3rem;
        height: 1.4rem;
    }
`
export const DivSpan = styled.div`
    display: flex;
    gap: 0.6rem;

    color:  #E4E8E8;


    img{
        cursor: pointer;
        transition-timing-function: ease;
        transition-duration: 0.5s;

        &:hover{
            transform: scale3d(1.2,1.2,1.2);
        }
    }
    
`