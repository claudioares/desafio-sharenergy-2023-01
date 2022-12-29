import {
    ContainerLogin, Form, Body, DivInput
} from './styled';
import LoginBar from '../../components/Loginbar';
import logo from '../../assets/LoginBar/logo.svg';

function Login () {
    return(
        <ContainerLogin>
        <LoginBar logo={logo} />

        <Body>
            <Form>
                <h1>lOGIN</h1>
                <DivInput>
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