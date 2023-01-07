import { useState } from 'react';
import dogPaws from '../../assets/RamdomDog/dogPaws.svg';
import dogPawsII from '../../assets/RamdomDog/dogPawsII.svg';
import reload from '../../assets/RamdomDog/reload.svg';
import {
    ContainerSiderBar
} from '../../globalStyled';
import { apiRandomDog } from '../../services/api';
import {
    ContentBody, ContentRamdomDog, DivImageDog
} from './styled';




function RamdomDog () {
    
    const [queryImage, setQueryImage] = useState('');


    const imagem = `https://random.dog/${queryImage}`
    
    async function handleRandomDog () {
        try {
            const response = await apiRandomDog.get('/woof?filter=mp4/webm')

            setQueryImage(response.data);

        } catch (error) {
            console.log(error)
        }
    }
   
    return(
        <ContentRamdomDog>
            <ContainerSiderBar>
                <img 
                    src={reload} 
                    alt="Imagem de recaregar"
                    onClick={()=> handleRandomDog()}
                    className='img_reload'
                />
            </ContainerSiderBar>
            <ContentBody>
                <DivImageDog>
                    <img src={imagem} alt='' />
                    <div>
                        <img src={dogPaws} alt='imagem de patinhas' />
                        <img src={dogPawsII} alt='imagem de patinhas' />
                        <img src={dogPaws} alt='imagem de patinhas' />
                        <img src={dogPawsII} alt='imagem de patinhas' />
                    </div>
                </DivImageDog>
            </ContentBody>
        </ContentRamdomDog>
    )
}

export default RamdomDog;