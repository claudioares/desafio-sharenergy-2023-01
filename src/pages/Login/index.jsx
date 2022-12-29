import {
    ContainerLogin, Form, 
    Body, DivInput, 
    ImgUser, ImgPassword
} from './styled';
import LoginBar from '../../components/Loginbar';
import logo from '../../assets/LoginBar/logo.svg';
import iconUser from '../../assets/Login/iconUser.svg';
import iconPassword from '../../assets/Login/iconPassword.svg';

function Login () {
    return(
        <ContainerLogin>
        <LoginBar logo={logo} />

        <Body>
            <Form>
                <h1>lOGIN</h1>
                <DivInput>
                    <ImgUser>
                        <img src={iconUser} alt='icone de usuario' />
                    </ImgUser>
                    <ImgPassword>
                        <img src={iconPassword} alt='icone de senha' />
                    </ImgPassword>
                    <input type='text' name='user_name' placeholder='Username'/>
                    <input type='text' name='password' placeholder='Password'/>
                </DivInput>

                <button>LOGIN</button>
            </Form>
        </Body>

        <LoginBar />
        </ContainerLogin>
    )
}

export default Login;