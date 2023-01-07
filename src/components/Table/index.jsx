import {
    ContainerTable,
    DivSearch,
    Img,
    DivTable
} from './styled';
import iconSearch from '../../assets/Table/iconSearch.svg';
import Pagination from '../../pagination/pagination';
import { useContext, useState } from 'react'
import { ContextApi } from '../context/ContextApi';

function Table () {
    const [offset, setOffSet] = useState(0)
    const LIMIT_LINES = 8;
    let currentLimitLine = offset + 8;

    const { 
        setClient, 
        listClients,
        LIMIT
    } = useContext(ContextApi);

    const [selectBttn, setSelectBttn] = useState({
        name: true,
        username: false,
        email: false
    })
    const [inputClient, setInputCLient] = useState('')
    const repoFilter = inputClient.length > 0
        ? listClients.filter(clnt => {
            let clientName = clnt.name.first + ' ' + clnt.name.last;
            const name = clientName.includes(inputClient)
            const username = clnt.login.username.includes(inputClient)
            const email = clnt.email.includes(inputClient)

            if(selectBttn.name) return name;
            if(selectBttn.username) return username;
            if(selectBttn.email) return email;
        })
        : [];

   

        function selectBtton (e) {
            const selectChildren = e.target.innerText;
           
            if(selectChildren === 'Nome'){
                setSelectBttn({
                    name: true,
                    username: false,
                    email: false
                })
            }
            if(selectChildren === 'Usename'){
                setSelectBttn({
                    name: false,
                    username: true,
                    email: false
                })
            }
            if(selectChildren === 'Email'){
                setSelectBttn({
                    name: false,
                    username: false,
                    email: true
                })
            }

        }


    return(

        <ContainerTable>
            <div>
                <DivSearch>
                    <h4>Escolha o modo de pesquisa!</h4>
                    <button 
                        onClick={(e)=>selectBtton(e)}
                        className={selectBttn.name ? 'selectButtonColor' : null}
                    >Nome</button>
                    <button
                        onClick={(e)=>selectBtton(e)}
                        className={selectBttn.username ? 'selectButtonColor' : null}
                    >Usename</button>
                    <button
                        onClick={(e)=>selectBtton(e)}
                        className={selectBttn.email ? 'selectButtonColor' : null}
                    >Email</button>
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
                        {repoFilter.slice(0, LIMIT_LINES).map(client => (
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
                    {listClients.slice(offset, currentLimitLine).map(client => (
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
                {LIMIT && (
                    <Pagination 
                        limit={LIMIT_LINES} 
                        total={LIMIT} 
                        offset={offset}
                        setOffSet={setOffSet}
                    />
                )}
            </div>
        </ContainerTable>
    )
}

export default Table;