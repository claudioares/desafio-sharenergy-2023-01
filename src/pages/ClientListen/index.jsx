import {
    ContainerClientListen,
    ContentBodyClient,
    ContenteTable,
    RegisterClient,
    DivRegister
} from './styled'
import iconEdit from '../../assets/RegisterCLientes/iconEdit.svg';
import iconTrash from '../../assets/RegisterCLientes/iconTrash.svg';
import Modal from '../../components/Modal';
import { useState } from 'react';





function ClientListen () {

    const [modal, setModal] = useState(false)
    return(
        <ContainerClientListen>
            <ContentBodyClient>
                <ContenteTable>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Endereço</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='content_body'>
                            <th>Claudio Soares</th>
                            <th>claudio@claudio.com</th>
                            <th>(00)00000-0000</th>
                            <th>Rua Helio Costa, 1343. Centro, Pinheiro-MA</th>
                            <th>000.000.000-00</th>
                            <div className='div_trash'>
                                <img src={iconEdit} alt='icone de edição' />
                                <img src={iconTrash} alt='icone de lixeira' />
                            </div>
                        </tr>
                    </tbody>
                </ContenteTable>
            </ContentBodyClient>
            <RegisterClient>
                <DivRegister>
                    <button onClick={()=>setModal(true)}>
                        Adicionar Registro
                    </button>
                </DivRegister>
            </RegisterClient>
            { modal && <Modal setModal={setModal}/>}
        </ContainerClientListen>
    )
}


export default ClientListen;


