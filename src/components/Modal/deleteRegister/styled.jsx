import styled from "styled-components";



export const ContainerModal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    top: 0%;
    left: 0%;
    
    background-color: #00000049;
    color: white;
`
export const ContenteModal = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 520px;
    height: 350px;

    background-color:#1b2f36fd;
    color:  #E4E8E8;
    border-radius: 20px;

    h2{
        margin-bottom: 2.5rem;
    }

    span{
        margin-top: 4.5rem;
    }
`
export const DivInput = styled.div`
    display: flex;
    flex-direction: column;

    gap: 5rem;
    .cell01{
        display: flex;
        flex-direction: column;
    }
    .cell02{
        display: flex;
        gap: 1rem;
    }
    .cell03{
        display: flex;
        gap: 1rem;
    }
    input{
        all: unset;
        text-align: center;
        color:  #E4E8E8;
        border-bottom: 1px solid #FFFFFF;

        padding: 1rem;
        
    }
`
export const DivButtons = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 6rem;
    button{
        width: 21.5rem;
        height: 6rem;
        border-radius: 10px ;
        color: #E4E8E8;
        cursor: pointer;
    }
    .add{
        background-color: #054141;
    }
    .cancel{
        background-color: #943939;
    }
`