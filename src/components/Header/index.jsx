import { Outlet } from 'react-router-dom';
import {
    ContainerHeader, Ul
} from './styled';
import logo from '../../assets/LoginBar/logo.svg';

function Header () {
    return(
        <>
            <div>
                <ContainerHeader>
                    <img src={logo} alt='logo da empresa' />
                    <Ul>
                        <li>Home</li>
                        <li>Status Cat</li>
                        <li>Random Dog</li>
                    </Ul>
                </ContainerHeader>
            </div>

            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Header;