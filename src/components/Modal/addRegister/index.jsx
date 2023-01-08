import {
    ContainerModal,
    ContenteModal, DivButtons, DivInput
} from './styled';

import { useContext, useState } from 'react';
import apiMongoDB from '../../../services/api';
import { ContextApi } from '../../context/ContextApi';
import ErrorMenssage from '../../errorMenssage';
import InputMask from 'react-input-mask'




function AddRegister () {

    const { 
        token, contacts, 
        setContacts, error, 
        errorMenssage, setModified,
        setAddRegister, setError
     } = useContext(ContextApi)

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ city, setCity ] = useState('')
    const [ country, setCountry ] = useState('')


    async function handleSubmitModal (e) {
        e.preventDefault();

        if(!username || !email || !phone || !cpf || !street || !number || !city || !country){
            errorMenssage("Preencha todas as informações!")
            return;
        }

        try {

            const response = await apiMongoDB.post('/addclient',{
                username,
                email,
                phone,
                cpf,
                street,
                number,
                city,
                country,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            );
            
            if(response > 204) return;

            
            const localContacts = [ response.data.createUser, ...contacts]

            setContacts(localContacts)
            setAddRegister(false)
            setModified({
                status: true,
                message: 'Adicionado com sucesso!'
            })

        } catch (error) {
            console.log(error.response)
            if(error.response.data.message === 'This email already exists!'){
                errorMenssage("O email já existe!")
            }

        }
    }
    return(
        <ContainerModal>
            <ContenteModal onSubmit={handleSubmitModal}>
                <h2>Adicionar Registro</h2>
                <DivInput>
                    <div className='cell01'>
                        <input type='text' name='name' placeholder='username'
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                        <input type='email' name='email' placeholder='Email' 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className='cell02'>
                        <InputMask mask='(99)99999-9999' type='text' name='phone' placeholder='Telefone: (00)0 0000-0000'
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                        />
                        <InputMask mask='999.999.999-99' type='text' name='cpf' placeholder='000.000.000-00'
                            value={cpf}
                            onChange={(e)=>setCpf(e.target.value)}
                        />
                    </div>
                </DivInput>
                <span>Endereço:</span>
                <DivInput>
                    <div className='cell03'>
                        <input type='text' name='stret' placeholder='Rua'
                            value={street}
                            onChange={(e)=>setStreet(e.target.value)}
                        />
                        <input type='text' name='number' placeholder='Numero'
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}

                        />
                    </div>
                    <div className='cell03'>
                        <input type='text' name='city' placeholder='Cidade' 
                            value={city}
                            onChange={(e)=>setCity(e.target.value)}
                        />
                        <input type='text' name='state' placeholder='Estado' 
                            value={country}
                            onChange={(e)=>setCountry(e.target.value)}
                        />
                    </div>
                </DivInput>
                <DivButtons>
                    <button className='add'>Adiconar</button>
                    <button className='cancel' onClick={()=>setAddRegister(false)}>Cancelar</button>
                </DivButtons>
            </ContenteModal>
            {error && <ErrorMenssage />}
        </ContainerModal>
    )
}

export default AddRegister;