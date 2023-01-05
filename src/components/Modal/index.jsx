import {
    ContainerModal,
    ContenteModal,
    DivInput,
    DivButtons
} from './styled';



function Modal ({setModal}) {
    return(
        <ContainerModal>
            <ContenteModal>
                <h2>Adicionar Registro</h2>
                <DivInput>
                    <div className='cell01'>
                        <input type='text' name='name' placeholder='Nome' />
                        <input type='text' name='name' placeholder='Email' />
                    </div>
                    <div className='cell02'>
                        <input type='text' name='name' placeholder='Telefone: (00)0 0000-0000' />
                        <input type='text' name='name' placeholder='CPF' />
                    </div>
                </DivInput>
                <span>Endereço:</span>
                <DivInput>
                    <div className='cell03'>
                        <input type='text' name='name' placeholder='Rua' />
                        <input type='text' name='name' placeholder='Numero' />
                    </div>
                    <div className='cell03'>
                        <input type='text' name='name' placeholder='Cidade' />
                        <input type='text' name='name' placeholder='Estado' />
                    </div>
                </DivInput>
                <DivButtons>
                    <button className='add'>Adiconar</button>
                    <button className='cancel' onClick={()=>setModal(false)}>Cancelar</button>
                </DivButtons>
            </ContenteModal>
        </ContainerModal>
    )
}

export default Modal;