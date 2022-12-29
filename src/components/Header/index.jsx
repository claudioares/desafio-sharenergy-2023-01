import { Outlet } from 'react-router-dom';
import {
    ContainerHeader, Ul
} from './styled';


function Header () {
    return(
        <>
            <div>
                <ContainerHeader>
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