import {
    ContainerTable,
    DivSearch,
    Img,
    DivTable
} from './styled';
import iconSearch from '../../assets/Table/iconSearch.svg';
import { useContext, useState } from 'react';
import { ContextApi } from '../context/ContextApi'

function SideBar () {

   const {
        listClients,
        setClient
    } = useContext(ContextApi)

    const [inputClient, setInputCLient] = useState('')

   
    const repoFilter = inputClient.length > 0
        ? listClients.filter(clnt => {
            let clientName = clnt.name.first + ' ' + clnt.name.last;
            const name = clientName.includes(inputClient)
            const username = clnt.login.username.includes(inputClient)
            const email = clnt.email.includes(inputClient)
            if(name || username || email ) return name, username, email;
        })
        : [];


        
    return(
        <ContainerTable>
            <div>
                <DivSearch>
                    <input 
                        type='text' 
                        name='search' 
                        placeholder='Search'
                        onChange={(e)=>setInputCLient(e.target.value)}
                        value={inputClient}
                    />
                    <Img src={iconSearch} alt="Icone de pesquisar" />
                </DivSearch>
                <DivTable>
                    <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Username</th>
                                <th>Email</th>
                            </tr>
                    </thead>
                    {inputClient.length > 0 ? 
                    <tbody>
                        {repoFilter.slice(0, 9).map(client => (
                            <tr key={client.email}>
                                <th className='green'
                                    onClick={(e)=>setClient(client)}
                                >{client.name.first} {client.name.last}</th>
                                <th className='blue'>{client.login.username}</th>
                                <th className='blue'>{client.email}</th>
                            </tr>
                        ))}
                    </tbody>
                    :
                    <tbody>
                    {listClients.slice(0, 9).map(client => (
                            <tr key={client.email}>
                                <th className='green'
                                    onClick={(e)=>setClient(client)}
                                >{client.name.first} {client.name.last}</th>
                                <th className='blue'>{client.login.username}</th>
                                <th className='blue'>{client.email}</th>
                            </tr>
                        ))}
                    </tbody>
                    }
                  
                </DivTable>
            </div>
            
        </ContainerTable>
    )
}

export default SideBar;