import {
    ContainerModal,
    ContenteModal,
    DivInput,
    DivButtons
} from './styled';
import apiMongoDB from '../../../services/api';
import { useState, useContext, useEffect } from 'react';
import { ContextApi } from '../../context/ContextApi';
import ErrorMenssage from '../../errorMenssage';
import InputMask from 'react-input-mask'

function EditRegister () {

    const { 
        currentContact, token, contacts, 
        error, errorMenssage, setModified,
        setEditeRegister
     } = useContext(ContextApi)

    const [ username, setUsername ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ cpf, setCpf ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ city, setCity ] = useState('')
    const [ country, setCountry ] = useState('')


    async function handleSubmit(e){
        e.preventDefault();

        if(!username || !email || !phone || !cpf || !street || !number || !city || !country){
            errorMenssage("Preencha todas as informações!")
            return;
        }
        try {
            if(currentContact.email === email){
        
                const response = await apiMongoDB.put(`/update/${currentContact._id}`,{
                    username,
                    phone,
                    cpf,
                    street,
                    number,
                    city,
                    country
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if(response.status > 204) return;
            } else {
                        
                const response = await apiMongoDB.put(`/update/${currentContact._id}`,{
                    username,
                    email,
                    phone,
                    cpf,
                    street,
                    number,
                    city,
                    country
                },{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if(response.status > 204) return;


            };
            
            
            const localContacts = [...contacts];
            const contactEditingFind = localContacts.find((contact)=>contact._id === currentContact._id)
            
            
            contactEditingFind.username = username;
            contactEditingFind.email = email;
            contactEditingFind.phone = phone;
            contactEditingFind.cpf = cpf;
            contactEditingFind.street = street;
            contactEditingFind.number = number;
            contactEditingFind.city = city;
            contactEditingFind.country = country;
            
            // setContacts([...contactEditingFind]);
            
            setEditeRegister(false);
            setModified({
                status: true,
                message: 'Editado com sucesso!'
            })

        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
        if(!currentContact) return

        const {
            username, email, phone, cpf, street, number, city, country
        } = currentContact

        setUsername(username)
        setEmail(email)
        phone && setPhone(phone)
        cpf && setCpf(cpf)
        street && setStreet(street)
        number && setNumber(number)
        city && setCity(city)
        country && setCountry(country)

    }, [currentContact])


    return(
        <ContainerModal>
            <ContenteModal onSubmit={handleSubmit}>
                <h2>Editar Registro</h2>
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
                        <InputMask mask='(99)99999-9999' type='text' name='phone' placeholder='Telefone: (00)00000-0000'
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
                    <button className='cancel' onClick={()=>setEditeRegister(false)}>Cancelar</button>
                </DivButtons>
            </ContenteModal>
            {error && <ErrorMenssage />}
        </ContainerModal>
    )
}

export default EditRegister;