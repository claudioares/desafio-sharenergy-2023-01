import {
    ContainerSiderBar,
    DivImagem,
    DivInforUser,
    DivInforUserComplet,
    MoreAbout,
    DivEndress
} from './styled';

import imgUserExemple from '../../assets/SiderBar/imgUserExemple.svg';
import { useContext, useEffect, useState } from 'react';
import { ContextApi } from '../context/ContextApi';

function SideBar () {


    const {
        client
    } = useContext(ContextApi)

    const [dataClients, setDataClients] = useState({
        image: imgUserExemple,
        name: null,
        username: null,
        age: null,
        email: null,
        fone: null,
        happy_d: null,
        endress: {
            street: null,
            number: null,
            city: null,
            state: null
        }
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
            email: client.email,
            fone: client.cell,
            happy_d: client.dob.date,
            endress: {
                street: client.location.street.name,
                number: client.location.street.number,
                city: client.location.city,
                state: client.location.state
            }
        })
    }, [client])
    

    return(
        <ContainerSiderBar>
                <DivImagem>
                    <img src={dataClients.image} alt='Imagem do usuario'/>
                </DivImagem>
                {dataClients.name && <>
                <DivInforUser>
                    <h3>{dataClients.name}</h3>
                    <p>@{dataClients.username}</p>
                    <span>{dataClients.age} anos</span>
                </DivInforUser>
        
                <DivInforUserComplet>
                    <MoreAbout>
                        <DivEndress>
                            <p>Fone: {dataClients.fone}</p>
                            <p>Aniversário: {dataClients.happy_d}</p>
                            <p className='endress'>Endereço:</p>
                            <p>
                                {dataClients.endress.street}, {dataClients.endress.number}
                            </p>
                            <p>{dataClients.endress.city} / {dataClients.endress.state}</p>
                        </DivEndress>
                    </MoreAbout>
                </DivInforUserComplet>
                </>}
        </ContainerSiderBar>
    )
}

export default SideBar;