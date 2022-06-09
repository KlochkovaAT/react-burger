import React, { useEffect, useState } from 'react';
import Header from '../app-header/app-header';
import styles from './app.module.css';
import Content from '../content/content';
import { dataUrl } from '../utils/constants';

function App() {
  const [data, setData] = useState();
  const [selectedBurger, setSelectedBurger] = useState();

  useEffect(() => {
    if (data) {
      setSelectedBurger({
        bun: data.find((item) => item.type === 'bun'),
        ingredients: data.filter((item) => item.type !== 'bun'),
      });
    }
  }, [data]);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
      })
      .then((resJson) => {
        setData(resJson.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.App}>
      <Header />
      {selectedBurger && <Content data={data} burger={selectedBurger} />}
    </div>
  );
}

export default App;
