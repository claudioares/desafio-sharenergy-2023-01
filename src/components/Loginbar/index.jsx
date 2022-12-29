import {ContentLoginBar} from './styled';



function LoginBar ({logo}) {

    
    return(
        <ContentLoginBar>
            {logo && <img src={logo} alt='Logo da empresa' />}
        </ContentLoginBar>
    )
}

export default LoginBar;