import {
    ContainerLogin, 
    Body, DivInput, 
    ImgUser, ImgPassword,
    DivLeft, ImgEmail, 
    FormLogin, DivSpan,
    ImgEmailLogin, FormSign
} from './styled';
import LoginBar from '../../components/Loginbar';
import logo from '../../assets/LoginBar/logo.svg';
import iconUser from '../../assets/Login/iconUser.svg';
import iconEmail from '../../assets/Login/iconEmail.svg';
import iconPassword from '../../assets/Login/iconPassword.svg';
import apiMongoDB from '../../services/api';
import { useState, useContext, useEffect } from 'react';
import arrowRight from '../../assets/Login/arrowRight.svg';
import { useNavigate } from 'react-router-dom';
import { ContextApi } from '../../components/context/ContextApi';


function InitPage () {
    const {
        token,
        setToken,
        setUser
    } = useContext(ContextApi)
    const navigate = useNavigate();
    const[sign, setSign] = useState(true)

     // STATES LOGIN
     const [emailLGN, setEmailLGN] = useState('')
     const [passwordLGN, setPasswordLGN] = useState('')
    
    // STATES SINGIN
    const [nameSN, setNameSN] = useState('')
    const [emailSN, setEmailSN] = useState('')
    const [passwordSN, setPasswordSN] = useState('')
    
    function handleOpenSign () {        
        sign ? setSign(false) : setSign(true)
    }
    
    async function handleSubmitSign (e) {
        e.preventDefault();
     
        try {
            if(!nameSN || !emailSN || !passwordSN) return

            const response = await apiMongoDB.post('/sign', {
                name: nameSN,
                email: emailSN,
                password: passwordSN
            });
            if(response.status > 204) return;
            
            setSign(false)
            
            setNameSN('')
            setEmailSN('')
            setPasswordSN('')
        } catch (error) {
            console.log(error.message)
        }
    }



    async function handleSubmitLogin (e) {
        e.preventDefault();

        try {
            const response = await apiMongoDB.post('/login',{
                email: emailLGN,
                password: passwordLGN
            })

            if(response.status > 204) return;

            const {
                token, ...userData
            } = response.data;

            setUser(userData);
            setToken(token);

            navigate('/home');
            setEmailLGN('');
            setPasswordLGN('');

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        if (token) {
            navigate('/home')
        }
    }, [])
    return(
        <ContainerLogin>
            <LoginBar logo={logo} />
            <Body>
                <DivLeft>
                    <h1>Economize com a Energia Solar!</h1>
                    <h3>
                        Tenha ao seu lado uma equipe de especialistas em energia solar. 
                        Economia, segurança e retorno do seu investimento garantidos.
                    </h3>
                </DivLeft>
                <FormLogin onSubmit={handleSubmitLogin}>
                    <h1>Vamos começar!</h1>
                    <h3>Entre com seu email e senha!</h3>
                    <DivInput>
                        <ImgEmailLogin>
                            <img 
                                src={iconEmail} 
                                alt='icone de email'
                            />
                        </ImgEmailLogin>
                        <ImgPassword>
                            <img 
                                src={iconPassword} 
                                alt='icone de senha'
                            />
                        </ImgPassword>
                        <input 
                            type='text' 
                            name='email' 
                            placeholder='Email'
                            value={emailLGN}
                            onChange={(e)=> setEmailLGN(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='password' 
                            placeholder='Password'
                            value={passwordLGN}
                            onChange={(e)=> setPasswordLGN(e.target.value)}
                        />
                    </DivInput>
                    <button>LOGIN</button>

                    <DivSpan>
                        <p>Não é cadastrado?</p>
                        <img 
                            src={arrowRight} 
                            alt='Seta para direita'
                            onClick={()=>handleOpenSign()}
                        />
                    </DivSpan>
                </FormLogin>

                {sign && <FormSign onSubmit={handleSubmitSign}>
                    <h1>Comece agora grátis</h1>
                    <h3>Crie sua conta no Sharenergy</h3>
                    <DivInput>
                        <ImgUser>
                            <img 
                                src={iconUser} 
                                alt='icone de usuario'
                            />
                        </ImgUser>
                        <ImgEmail>
                            <img 
                                src={iconEmail} 
                                alt='icone de email'

                            />
                        </ImgEmail>
                        <ImgPassword>
                            <img 
                                src={iconPassword} 
                                alt='icone de senha'
                            />
                        </ImgPassword>
                        <input 
                            type='text' 
                            name='user_name' 
                            placeholder='Username'
                            value={nameSN}
                            onChange={(e)=> setNameSN(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='email' 
                            placeholder='Email'
                            value={emailSN}
                            onChange={(e)=> setEmailSN(e.target.value)}
                        />
                        <input 
                            type='text' 
                            name='password' 
                            placeholder='Password'
                            value={passwordSN}
                            onChange={(e)=> setPasswordSN(e.target.value)}
                        />
                    </DivInput>

                    <button>CADASTRAR</button>

                    <DivSpan>
                        <p>Já é cadastrado?</p>
                        <img 
                            src={arrowRight} 
                            alt='Seta para direita'
                            onClick={()=>handleOpenSign()}
                        />
                    </DivSpan>
                </FormSign>}
            </Body>
            <LoginBar />
        </ContainerLogin>
    )
}

export default InitPage;