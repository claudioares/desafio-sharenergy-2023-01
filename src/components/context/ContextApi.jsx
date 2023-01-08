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
    const [editRegister, setEditeRegister] = useState(false)
    const [addRegister, setAddRegister] = useState(false)
    const [deleteRegister, setDeleteRegister] = useState(false)
    const LIMIT = 1000;

    // function error
    const [modified, setModified] = useState({
        status: false,
        message: ''
    })
    const [error, setError] = useState(false)
    const [messageError, setMessageError] = useState('')
    function errorMenssage (string){
        setMessageError(string)
        setError(true)
        setTimeout(()=>{
            setError(false)
        }, 2000)
    }
    // 

    useEffect(()=>{
        async function loadClients () {
            const response = await api.get(`/?results=${LIMIT}`);
            setListClients(response.data.results)
        }
        loadClients();
    }, [])

    return(
        <ContextApi.Provider value={{
            LIMIT,
            listClients, client,setClient,
            token, setToken, clearToken,
            user, setUser, clearUser,
            contacts, setContacts,
            currentContact, setCurrentContact, clearCurrentContact,
            error, setError, messageError, setMessageError,
            errorMenssage, modified, setModified,
            editRegister, setEditeRegister,
            addRegister, setAddRegister,
            deleteRegister, setDeleteRegister
        }} >
            {children}
        </ContextApi.Provider>
    )
}

export default ContextProvider;