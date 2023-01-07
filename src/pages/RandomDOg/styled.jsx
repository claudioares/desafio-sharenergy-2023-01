import styled from "styled-components";


export const ContentRamdomDog = styled.ul`
    display: flex;
    height: calc(100vh - 7.6rem);

    .img_reload{
        position: absolute;
        cursor: pointer;

        width: 4%;

        bottom: 5%;

        transition-timing-function: ease;
        transition-duration: 0.1s;

        &:hover, :focus{
            transform: translateX(0.3rem);
            scale: 1.2;
        }
    }

`
export const ContentBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 5rem;

    width: 100%;

    background-color: #00ffff13;

`
export const DivImageDog = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    width: 90rem;
    height: 64rem;
    padding: 0 4rem;


    background-color: #faf9cb;
    
    overflow: hidden;
    img{
        max-width: 70%;
        margin-left: 3rem;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;

        gap: 5rem;
        img{
            width: 20%;
        }
    }
`