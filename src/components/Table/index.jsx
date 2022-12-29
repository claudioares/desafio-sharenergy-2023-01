import {
    ContainerTable,
    DivSearch,
    Img,
    DivTable
} from './styled';
import iconSearch from '../../assets/Table/iconSearch.svg';


function SideBar () {
    return(
        <ContainerTable>
            <div>
                <DivSearch>
                    <input type='text' name='search' placeholder='Search'/>
                    <Img src={iconSearch} alt="Icone de pesquisar" />
                </DivSearch>
                <DivTable>
                    <ul>
                        <li>Nome</li>
                        <li>Username</li>
                        <li>Email</li>
                    </ul>
                    <ul>
                        <li className='green'>Cláudio Soares</li>
                        <li className='blue'>@dinhoares</li>
                        <li className='blue'>claudio@email.com</li>
                    </ul>
                  
                </DivTable>
            </div>
            
        </ContainerTable>
    )
}

export default SideBar;