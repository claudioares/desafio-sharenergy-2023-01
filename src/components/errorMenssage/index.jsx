import {
    ContainerErrorMessage
} from "./styled";
import { useContext } from 'react';
import { ContextApi } from "../context/ContextApi";

function ErrorMenssage () {

    const {messageError} = useContext(ContextApi);

    return(
        <ContainerErrorMessage>
            {
                !messageError 
                ? 
                <span>{messageError}</span>
                :
                <span>{messageError}</span>
            }
        </ContainerErrorMessage>
    )
}

export default ErrorMenssage;