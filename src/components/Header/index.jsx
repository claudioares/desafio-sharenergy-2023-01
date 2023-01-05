import { Outlet, useNavigate } from 'react-router-dom';
import {
    ContainerHeader, Ul
} from './styled';
import logo from '../../assets/LoginBar/logo.svg';
import iconExit from '../../assets/header/iconExit.svg';
import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';

function Header () {
    const {
        clearToken,
        clearUser
    } = useContext(ContextApi);

    function HandlePageHome () {
        navigate('/home')
    }

    function HandlePageStatusCat () {
        navigate('/statuscat')
    }

    function HandlePageRamdomDog () {
        navigate('/randomdog')
    }

    function HandlePageClientListen () {
        navigate('/clientlisten')
    }

    const navigate = useNavigate()
    function handleLogout () {
     
        clearToken()
        clearUser()

        navigate('/')
    }

    
    return(
        <>
            <div>
                <ContainerHeader>
                    <img src={logo} alt='logo da empresa' />
                    <Ul>
                        <li onClick={()=>HandlePageHome()}>Home</li>
                        <li onClick={()=>HandlePageStatusCat()}>Status Cat</li>
                        <li onClick={()=>HandlePageRamdomDog()}>Random Dog</li>
                        <li onClick={()=>HandlePageClientListen()}>Lista de clientes</li>
                    </Ul>
                    <img 
                        src={iconExit} 
                        alt='icone de saída'
                        className='exit'
                        onClick={handleLogout}
                    />
                </ContainerHeader>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Header;