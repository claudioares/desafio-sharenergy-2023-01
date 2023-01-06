import { createContext, useState, useEffect } from 'react';
import { api } from '../../services/api';
import { useLocalStorage } from "react-use";


export const ContextApi = createContext();

function ContextProvider ({children}) {

    const [ listClients, setListClients ] = useState([]);
    const [ client, setClient ] = useState([])
    const [ token, setToken, clearToken ] = useLocalStorage('token');
    const [ user, setUser, clearUser ] = useLocalStorage('user');
    const [ contacts, setContacts ] = useState([]);
    const [currentContact, setCurrentContact, clearCurrentContact] = useLocalStorage('current_contact')

    useEffect(()=>{
        async function loadClients () {
            const response = await api.get('/?results=100');
            setListClients(response.data.results)
        }
        loadClients();
    }, [])

    return(
        <ContextApi.Provider value={{
            listClients, client,setClient,
            token, setToken, clearToken,
            user, setUser, clearUser,
            contacts, setContacts,
            currentContact, setCurrentContact, clearCurrentContact
        }} >
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;