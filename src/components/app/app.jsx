import React, { useEffect, useState } from 'react';
import Header from '../app-header/app-header';
import styles from './app.module.css';
import Content from '../content/content';
import { dataUrl } from '../utils/constants';
import BurgerIngredientsContext from '../burger-ingredients-context/burger-ingredients-context';
import BurgerConstructorContext from '../burger-constructor-context/burger-constructor-context';

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
      <BurgerIngredientsContext.Provider value={data}>
        <BurgerConstructorContext.Provider value={selectedBurger}>
          {selectedBurger && <Content />}
        </BurgerConstructorContext.Provider>
      </BurgerIngredientsContext.Provider>
    </div>
  );
}

export default App;
