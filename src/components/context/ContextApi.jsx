import { createContext, useState, useEffect } from 'react';
import api from '../../services/api';


export const ContextApi = createContext();

function ContextProvider ({children}) {

    const [ listClients, setListClients ] = useState([]);
    const [client, setClient] = useState([])

    useEffect(()=>{
        async function loadClients () {
            const response = await api.get('/?results=5000');
            setListClients(response.data.results)
        }
        loadClients();
    }, [])


    return(
        <ContextApi.Provider value={{
            listClients,
            client,
            setClient
        }} >
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;