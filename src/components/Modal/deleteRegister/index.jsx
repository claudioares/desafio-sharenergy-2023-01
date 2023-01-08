import {
    ContainerModal,
    ContenteModal,
    DivButtons
} from './styled';
import apiMongoDB from '../../../services/api';
import { useContext } from 'react'
import { ContextApi } from '../../context/ContextApi' 

function AddRegister () {

    const {
        currentContact, 
        token, 
        contacts, 
        setContacts,
        setDeleteRegister,
        setModified
    } = useContext(ContextApi)


    async function hendleSubmit (e) {
        e.preventDefault()

        try {
            const response = await apiMongoDB.delete(`/delete/${currentContact._id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            if(response.status > 204) return

     
            const localContacts = [...contacts];
            const contactEditingFindIndex = localContacts.findIndex(contact => contact._id === currentContact._id)

            localContacts.splice(contactEditingFindIndex, 1)

            setContacts([...localContacts])
            setDeleteRegister(false)

            setModified({
                status: true,
                message: 'Deletado com sucesso!'
            })

        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <ContainerModal>
            <ContenteModal onSubmit={hendleSubmit}>
                <h2>Deletar Registro</h2>

                <DivButtons>
                    <button className='add'>Sim</button>
                    <button className='cancel' onClick={()=>setDeleteRegister(false)}>Não</button>
                </DivButtons>
            </ContenteModal>
        </ContainerModal>
    )
}

export default AddRegister;