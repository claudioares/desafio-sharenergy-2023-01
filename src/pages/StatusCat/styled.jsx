import styled from "styled-components";

export const ContainerStatusCat = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: calc(100vh - 7.6rem);
`
export const ContentStatus = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;

    gap: 1.5rem;
    width: 100%;
    height: 100%;
    color: white;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 3rem;
        gap: 0.9rem;

    }

    li{
        cursor: pointer;
        font-size: 14px;

        &:hover{
            color: #ececc3;    
        }
    }

    input{
        all: unset;

        width: 12.1rem;
        height: 3.4rem;

        text-align: center;
        font-size: 1.4rem;

        background-color: #FFFFFF;
        border: 0.1rem solid #b7bdbd;
        color: black;
        border-radius: 1.5rem;

        &::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 1.4rem;

            color: rgba(22, 28, 45, 0.41);
        }
        &:hover{
            border: 0.1rem solid #8c9797;
        }
    }
`
export const DivImagem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 80%;
    min-height: 100%;
`
