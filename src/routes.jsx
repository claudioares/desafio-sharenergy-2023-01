import { Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import StatusCat from './pages/StatusCat';

const MainHouter = () =>{
     return(
        <Routes>
            <Route  path='/' element={<Login />} />
            <Route element={<Header />} >
                <Route  path='/home' element={<Home />} />
                <Route  path='/statuscat' element={<StatusCat />} />
            </Route>
        </Routes>
     )
}

export default MainHouter;