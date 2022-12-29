import {
    ContainerSiderBar,
    DivImagem,
    DivInforUser,
    DivIcons,
    DivInforUserComplet
} from './styled';
import iconHappyDay from '../../assets/SiderBar/iconHappyDay.svg';
import iconLocalite from '../../assets/SiderBar/iconLocalite.svg';
import iconPhone from '../../assets/SiderBar/iconPhone.svg';
import imgUserExemple from '../../assets/SiderBar/imgUserExemple.svg';
import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi';

function SideBar () {


    const {
        client
    } = useContext(ContextApi)

    return(
        <ContainerSiderBar>
                <DivImagem>
                    <img src={client.picture.large} alt='Imagem do usuario'/>
                </DivImagem>
                <DivInforUser>
                    <h3>{client.name.first} {client.name.last}</h3>
                    <p>@{client.login.username}</p>
                    <span>{client.dob.age} anos</span>
                </DivInforUser>
                <DivIcons>
                    <img 
                        src={iconPhone} 
                        alt='icone de fone'
                        onClick={()=>alert('icone de telefone')}
                    />
                    <img 
                        src={iconHappyDay} 
                        alt='icone de aniversario'
                        onClick={()=>alert('icone de aniversario')}
                    />
                    <img 
                        src={iconLocalite} 
                        alt='icone de localização'
                        onClick={()=>alert('icone de localização')}
                    />
                </DivIcons>
                <DivInforUserComplet>
                    <p>{client.email}</p>
                </DivInforUserComplet>
        </ContainerSiderBar>
    )
}

export default SideBar;