import styled from "styled-components";


export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width:100%;
    height: 7.6rem;
    padding: 0 4.5% 0 4.5%;
    background-color: #1B2F36;

    .exit{
        cursor: pointer;
    }
`
export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    min-width: 40%;
    gap: 1rem;

    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.7rem;

    color: #FFBC42;

    li{
        list-style: none;
        cursor: pointer;

        &:hover{
            color: #e0dace;
        }
    }
`