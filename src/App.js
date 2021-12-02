import React, {useEffect} from 'react'
import Login from './components/Login'
import Button from 'react-bootstrap/Button'
import './css/App.css';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import  Home from './components/Home'

function getLibrary(provider) {
    return new Web3(provider)
}

function App() {

  return (
    <div className="App">
        <h1>spacebook</h1>
        <Login />
        <Web3ReactProvider getLibrary={getLibrary}>
            <Home />
        </Web3ReactProvider>
      
    </div>
  );
}

export default App;
