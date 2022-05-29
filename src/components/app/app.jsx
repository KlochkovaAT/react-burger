import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../app-header/app-header';
import styles from './app.module.css';
import { data } from '../utils/data';
import Content from '../content/content';

function App() {
  const selectedBurger = {
    bun : data.find(item => item.type === 'bun'),
    ingredients : data.filter(item => item.type !== 'bun')
  }

  return (
    <div className={styles.App}>
      <Header />
      <Content data={data} burger={selectedBurger}/>
    </div>
  );
}

export default App;
