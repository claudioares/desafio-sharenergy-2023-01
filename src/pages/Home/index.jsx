import {
  ContainerHome,
  BodyHome
} from './styled';
import SideBar from '../../components/SiderBar';
import Table from '../../components/Table';


function Home() {

  return (
    <ContainerHome>
      <SideBar />
      <BodyHome>
        <Table/>
      </BodyHome>
    </ContainerHome>
  )
}

export default Home;
