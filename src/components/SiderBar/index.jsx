import {
    ContainerSiderBar,
    DivImagem,
    DivInforUser,
    DivIcons,
    DivEmail
} from './styled';
import iconEmail from '../../assets/SiderBar/iconEmail.svg';
import iconHappyDay from '../../assets/SiderBar/iconHappyDay.svg';
import iconLocalite from '../../assets/SiderBar/iconLocalite.svg';
import iconPhone from '../../assets/SiderBar/iconPhone.svg';
import imgUserExemple from '../../assets/SiderBar/imgUserExemple.svg';

function SideBar () {
    return(
        <ContainerSiderBar>
                <DivImagem>
                    <img src={imgUserExemple} alt='Imagem do usuario'/>
                </DivImagem>
                <DivInforUser>
                    <h3>Natalia Campos</h3>
                    <p>@liaCampos</p>
                    <span>22 anos</span>
                </DivInforUser>
                <DivIcons>
                    <img src={iconEmail} alt='icone de email'/>
                    <img src={iconPhone} alt='icone de fone'/>
                    <img src={iconHappyDay} alt='icone de aniversario'/>
                    <img src={iconLocalite} alt='icone de localização'/>
                </DivIcons>
                <DivEmail>
                    <p>nat_compos@email.com</p>
                </DivEmail>
        </ContainerSiderBar>
    )
}

export default SideBar;