import { 
    ContentStatus,
    DivImagem,
    ContainerStatusCat
} from './styled';
import { ContainerSiderBar } from '../../globalStyled'
import { useState } from 'react';


function StatusCat () {
    const [status, setStatus] = useState('');
    const [valueInput, setValueInput] = useState('')
   

    const imagem = `https://http.cat/${status}`;

 

    async function handleApiDog () {
        const response = await apiDog.get('');
        console.log(response)
    }
    handleApiDog();

    function handleSubmit (e) {
        e.preventDefault()

        try {

            if(!valueInput) return;
    
            setStatus(valueInput)
    
            setValueInput('')

        } catch (error) {
            console.log(error)
        }
        
    }


    return(
        <ContainerStatusCat>
            <ContainerSiderBar>
                <ContentStatus>
                    <h3>Escolha um status:</h3>

                    <li onClick={()=>setStatus('401')}>401 (Unauthorized)</li>
                    <li onClick={()=>setStatus('201')}>201 (Created)</li>
                    <li onClick={()=>setStatus('204')}>204 (No Content)</li>
                    <li onClick={()=>setStatus('400')}>400 (Bad Request)</li>
                    <li onClick={()=>setStatus('403')}>403 (Forbidden)</li>
                    <form onSubmit={handleSubmit}>
                        <label>Escolha outro status code:</label>
                        <input 
                            type='text' 
                            name='statuscode' 
                            placeholder='ex: 100'
                            onChange={(e) => setValueInput(e.target.value)}
                            value={valueInput}
                        />
                    </form>
                </ContentStatus>   
            </ContainerSiderBar>

            <DivImagem>
                <div>
                    {!status ? 
                        <h3>Clique ou digite um status para ver a imagem!</h3>
                        :
                        <img 
                            src={imagem} 
                            alt='imagem de gatinho'
                        />
                    }
                </div>
            </DivImagem>
                
        </ContainerStatusCat>
    )
}

export default StatusCat;