import {
    ContainerErrorMessage
} from "./styled";


function ErrorMenssage ({messageError}) {
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