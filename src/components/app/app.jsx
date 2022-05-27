import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../app-header/app-header';

import styles from './app.module.css';
import { data } from '../utils/data';
import Content from '../content/content';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content data={data} />
    </div>
  );
}

export default App;
