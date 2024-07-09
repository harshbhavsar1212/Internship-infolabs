import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { Second } from './App';
import Bdgmain,{Btnbadge,Pillsuccessbadge,Passbadge,Failbadge} from './Navbar';
import Mainmodal,{Fullscreenmodal,Largemodal} from './Modalspage';
import reportWebVitals from './reportWebVitals';
import Resulttble from './Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Second/>
    <Bdgmain/>
    <Btnbadge/>
    <Pillsuccessbadge />
    <Passbadge/>
    <Failbadge/>
    <Resulttble/>
    <Mainmodal/>
    <Fullscreenmodal/>
    <Largemodal/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
