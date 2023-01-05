import { Navigate, Outlet, Route, Routes} from 'react-router-dom';
import InitPage from './pages/InitPage';
import Home from './pages/Home';
import Header from './components/Header';
import StatusCat from './pages/StatusCat';
import RandomDog from './pages/RandomDOg';
import ClientListen from './pages/ClientListen';
import { useContext } from 'react';
import { ContextApi } from './components/context/ContextApi';


function ProtectdRoutes ({ redirectTo }) {
   const {
      token
   } = useContext(ContextApi);

   return token ? <Outlet /> : <Navigate to={redirectTo} />
   
}

function MainHouter () {
     return(
        <Routes>
            <Route  path='/' element={<InitPage />} />
               <Route element={<ProtectdRoutes redirectTo='/' />}>
                  <Route element={<Header />} >
                  <Route  path='/home' element={<Home />} />
                  <Route  path='/statuscat' element={<StatusCat />} />
                  <Route  path='/randomdog' element={<RandomDog />} />
                  <Route  path='/clientlisten' element={<ClientListen />} />
               </Route>
            </Route>
        </Routes>
     )
}

export default MainHouter;