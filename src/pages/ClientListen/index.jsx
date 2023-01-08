import { useContext, useEffect, useState } from 'react';
import iconEdit from '../../assets/RegisterCLientes/iconEdit.svg';
import iconTrash from '../../assets/RegisterCLientes/iconTrash.svg';
import { ContextApi } from '../../components/context/ContextApi';
import ErrorMenssage from '../../components/errorMenssage';
import AddRegister from '../../components/Modal/addRegister';
import DeleteRegister from '../../components/Modal/deleteRegister';
import EditeRegister from '../../components/Modal/editeRegister';
import apiMongoDB from '../../services/api';
import {
    ContainerClientListen,
    ContentBodyClient,
    ContenteTable, DivRegister, 
    RegisterClient
} from './styled';





function ClientListen () {

    const {
        token, contacts, setContacts, 
        setCurrentContact, modified, 
        setModified, errorMenssage, error,
        editRegister, setEditeRegister,
        addRegister, setAddRegister,
        deleteRegister, setDeleteRegister
    } = useContext(ContextApi)

    function handleEditRegister (contact) {
        setEditeRegister(true); 


        setCurrentContact(contact)
    }
   
    function handleDeleteRegister (contact) {
        setDeleteRegister(true);

        
        setCurrentContact(contact)
    }

    
    useEffect(()=>{
        async function loadContacts () {
            try {
                const response = await apiMongoDB.get('/listing', {
                    headers: {
                        Authorization: `${token}`
                    }
                })
                
                if(response.status > 204) return;
                
                setContacts([...response.data])
                
            } catch (error) {
                console.log(error)
            }
        }
        
        loadContacts()
    }, [])



    


    useEffect(()=>{
        if(modified.status){
            errorMenssage(modified.message) 
        }
        setModified({
            status: false,
            message: ''
        })
        return
    }, [editRegister, addRegister, deleteRegister])


    return(
        <ContainerClientListen>
            <ContentBodyClient>
                <ContenteTable>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {contacts.map((contact)=>(
                            <tr className='content_body' key={contact._id} >
                                <th>{contact.username}</th>
                                <th>{contact.email}</th>
                                <th>{contact.phone}</th>
                                <th>{contact.street}, {contact.number}. {contact.city}-{contact.country}</th>
                                <th>{contact.cpf}</th>
                                <th className='div_trash'>
                                    <img 
                                        src={iconEdit} 
                                        alt='icone de edição'
                                        onClick={(e)=>handleEditRegister(contact)}
                                    />
                                    <img 
                                        src={iconTrash} 
                                        alt='icone de lixeira'
                                        onClick={(e)=>handleDeleteRegister(contact)}
                                    />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </ContenteTable>
            </ContentBodyClient>
            <RegisterClient>
                <DivRegister>
                    <button onClick={()=>setAddRegister(true)}>
                        Adicionar Registro
                    </button>
                </DivRegister>
            </RegisterClient>
            { addRegister && <AddRegister />}
            { editRegister && <EditeRegister />}
            { deleteRegister && <DeleteRegister />}
            {error && <ErrorMenssage />}
        </ContainerClientListen>
    )
}


export default ClientListen;


