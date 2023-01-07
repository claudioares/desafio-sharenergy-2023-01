import styled from "styled-components";



export const ContainerPagination = styled.div`
    display: flex;

    ul{
        display: flex;
        list-style: none;

        li + li{
            all: unset;
            margin-left: 1rem;
            
        }
        button{
            padding: 0.3rem;
            min-width: 40px;
            cursor: pointer;
        }
        .pagination_item--active{
            background: none;
            font-weight: bold;
            border: none;

            &:focus{
                outline: none;
            }
        }
    }
`
