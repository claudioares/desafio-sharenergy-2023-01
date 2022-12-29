import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter }  from 'react-router-dom';
import MainHouter from './routes';
import GlobalStyled from './globalStyled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyled />
      <MainHouter />
    </BrowserRouter>
  </React.StrictMode>
)
