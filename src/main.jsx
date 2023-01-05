import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter }  from 'react-router-dom';
import MainHouter from './routes';
import GlobalStyled from './globalStyled';
import ContextProvider from './components/context/ContextApi';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <GlobalStyled />
        <MainHouter />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)
