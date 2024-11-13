import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CounterApp from './components/CounterApp.jsx'
import {useCounter} from './components/CounterApp.jsx'
import { ListOfUsers } from './components/ListOfUsers.jsx'
import { LazyComponent } from './components/LazyComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
    <ListOfUsers />
    <LazyComponent /> 
  </StrictMode>,
)
