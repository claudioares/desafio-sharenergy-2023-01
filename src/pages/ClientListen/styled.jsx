import styled from "styled-components";

export const ContainerClientListen = styled.div`
    display: flex;
    min-height: calc(100vh - 7.6rem);
    padding: 2.2rem 2.2rem 0 2.2rem;
`
export const ContentBodyClient = styled.div`
    width: 100%;
`
export const ContenteTable = styled.table`
    width: 100%;

    tr{
        background-color: #297c91;
        color: #ece9e3;

    }
    th{
        padding: 0.5rem;
    }
    .content_body {
        width: calc(100% / 5);
        background-color: antiquewhite;
        color: #0a0c0c;

        th{
            cursor: pointer;
            &:hover{
                opacity:0.8;
            }
        }
    }
    .div_trash{
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        
        gap: 1.9rem;
        padding: 0.5rem;

        background-color: #297c91;

        img{
            cursor: pointer;

            &:hover{
                opacity: 0.8;
            }
        }
    }
`
export const RegisterClient = styled.div`
    display: flex;
    justify-content: center;
    width: 20%;

`
export const DivRegister = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 9rem;
    button{
        all: unset;
        
        height: 2.6rem;
        background-color: #297c91;
        color: #ece9e3;
        border-radius: 5px;
        padding: 0.9rem;

        cursor: pointer;

        transition-timing-function: ease;
        transition-duration: 0.5s;
        
        &:hover{
            opacity: 0.8;
            transform: translateY(-15px);
        }
    }
`