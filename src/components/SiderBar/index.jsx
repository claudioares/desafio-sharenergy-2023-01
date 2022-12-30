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
import { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../context/ContextApi';

function SideBar () {


    const {
        client
    } = useContext(ContextApi)

    const [dataClients, setDataClients] = useState({
        image: imgUserExemple,
        name: '',
        username: '',
        age: null,
        email: ''
    })
    useEffect(()=>{
        if(client.length === 0){
            return;
        }

        setDataClients({
            image: client.picture.large,
            name: client.name.first +' '+ client.name.last,
            username: client.login.username,
            age: client.registered.age,
            email: client.email
        })
    }, [client])




    return(
        <ContainerSiderBar>
                <DivImagem>
                    <img src={dataClients.image} alt='Imagem do usuario'/>
                </DivImagem>
                <DivInforUser>
                    <h3>{dataClients.name}</h3>
                    <p>@{dataClients.username}</p>
                    <span>{dataClients.age} anos</span>
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
                    <p>{dataClients.email}</p>
                </DivInforUserComplet>
        </ContainerSiderBar>
    )
}

export default SideBar;