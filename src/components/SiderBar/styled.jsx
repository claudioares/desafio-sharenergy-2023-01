import styled from "styled-components";

export const DivImagem = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #FFBC42;
    width: 15.1rem;
    height: 15.1rem;

    border-radius: 50%;

    &:hover{
        background-color: rgba(223, 185, 116, 0.875);
    }
    img{
        width: 14.7rem;
        height: 14.7rem;
        border-radius: 50%;
    }
`
export const DivInforUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 1.4rem;

    h3{
        display: flex;
        align-items: center;
        text-align: center;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 3.3rem;

        color: #E4E8E8;
    }
    p{
        display: flex;
        align-items: center;
        text-align: center;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.2rem;


        color: #E4E8E8;
    }
    span{
        display: flex;
        align-items: center;
        text-align: center;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.2rem;


        color: #FFBC42;
    }
`
export const DivInforUserComplet = styled.div`
    width: 100%;
`
export const MoreAbout = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items:center;
    flex-direction: column;

    width: 100%;

`
export const DivEndress = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;

    width: 100%;

    p{
        display: flex;
        align-items: center;
        text-align: center;

        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        color: #FFBC42;
    }
    .endress{
        margin-top: 1rem;
        color: #E4E8E8;
    }
`