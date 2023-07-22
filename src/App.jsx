import React from 'react';
import './App.css';

import { Hero, Demo } from './components';
import {store} from './services/store';

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App