import {
    ContainerTable,
    DivSearch,
    Img,
    DivTable
} from './styled';
import iconSearch from '../../assets/Table/iconSearch.svg';
import { useContext } from 'react';
import { ContextApi } from '../context/ContextApi'

function SideBar () {

   const {
        listClients,
        setClient
    } = useContext(ContextApi)


   
    return(
        <ContainerTable>
            <div>
                <DivSearch>
                    <input type='text' name='search' placeholder='Search'/>
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
                    <tbody>
                        {listClients.slice(0, 9).map(client => (
                            <tr key={client.email}>
                                <th className='green'
                                    onClick={(e)=>setClient(client)}
                                >{client.name.first} {client.name.last}</th>
                                <th className='blue'>@{client.login.username}</th>
                                <th className='blue'>{client.email}</th>
                            </tr>
                        ))}
                    </tbody>
                  
                </DivTable>
            </div>
            
        </ContainerTable>
    )
}

export default SideBar;