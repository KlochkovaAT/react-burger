import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import stylesTabs from './tabs.module.css';

const Tabs = () => {
    const [current, setCurrent] = React.useState('one')
    return (
      <div className={`${stylesTabs.tabs} mb-10`}>
        <Tab value="bread" active={current === 'bread'} onClick={setCurrent}>
        Булки
        </Tab>
        <Tab value="souce" active={current === 'souce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="filling" active={current === 'filling'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
    )
};

export default Tabs;