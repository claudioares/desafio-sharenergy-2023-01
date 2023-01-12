import styled from "styled-components";


export const ContainerTable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 6.2rem 9.4rem 0 6.7rem;
   
`
export const ContentTable = styled.div`
    max-width: 100%;
`
export const DivSearch = styled.div`
    position: relative;
    min-width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 2rem;
    margin-bottom: 4.1rem;

    h4{
        color: #251b09;
    }

    .selectButtonColor{
        background-color: #297c91;
    }

    button{
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 2.6rem;
        width: 6rem;
        background-color: #8c9797;
        color: #ece9e3;
        border-radius: 5px;
        padding: 0.9rem;

        cursor: pointer;

        transition-timing-function: ease;
        transition-duration: 0.5s;
        
        &:hover{
            opacity: 0.8;
            transform: translateY(-5px);
        }
    }
    input{
        all: unset;

        min-width: 42.1rem;
        height: 3.4rem;

        background-color: #FFFFFF;
        border: 0.1rem solid #b7bdbd;
        border-radius: 1.5rem;

        padding-left: 2.4rem;
        
        &::placeholder{
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;

            color: rgba(22, 28, 45, 0.41);
        }
        &:hover{
            border: 0.1rem solid #8c9797;
        }
    }
`
export const Img = styled.img`
    position: absolute;
    min-width: 1.7rem;
    height: 1.7rem;
    right: 1%;
`
export const DivTable = styled.table`
    border-collapse: collapse;
    margin-bottom: 1rem;
    tr{
        display: flex;
        align-items: center;
    }
    tr th{
        list-style: none;
        min-width: 64.5%;
        min-height: 6.7rem;

        display: flex;
        align-items: center;
        justify-content: center;

        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2.7rem;

        color: #8c9797;
        background-color: #1B2F36;

        border-right: 0.1rem solid #FFBC42;
        border-bottom: 0.1rem solid #E4E8E8;
    }
    .green{
        background-color: #00A2A2;
        color: #E4E8E8;

        cursor: pointer;

        &:hover {
            opacity: 0.9;         
        }
    }
    .blue{
        background-color: #8C9CBD;;
        color: #E4E8E8;
    }
`