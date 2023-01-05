import {ContainerHome} from './styled';
import SideBar from '../../components/SiderBar';
import Table from '../../components/Table';
import { useContext, useState } from 'react'
import { ContextApi } from '../../components/context/ContextApi';

function Home() {

  const {
    listClients,
    setClient
  } = useContext(ContextApi);

  const [inputClient, setInputCLient] = useState('')
  const repoFilter = inputClient.length > 0
      ? listClients.filter(clnt => {
          let clientName = clnt.name.first + ' ' + clnt.name.last;
          const name = clientName.includes(inputClient)
          const username = clnt.login.username.includes(inputClient)
          const email = clnt.email.includes(inputClient)
          if(name || username || email ) return name, username, email;
      })
      : [];


  return (
    <ContainerHome>
      <SideBar />
      <Table
        listClients={listClients}
        setClient={setClient}
        inputClient={inputClient}
        setInputCLient={setInputCLient}
        repoFilter={repoFilter}
      />
    </ContainerHome>
  )
}

export default Home;
