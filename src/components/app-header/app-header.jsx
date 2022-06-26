import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  return (
    <header className={`${styles['app-header']}`}>
      <div className={`${styles['app-header__container']}`}>
        <div className={`${styles['app-header__button']} pl-5 pt-4 pr-5 pb-4 mt-4 mb-4`}>
          <BurgerIcon type='primary' />
          <span className='text text_type_main-default ml-2'>Конструктор</span>
        </div>
        <div className={`${styles['app-header__button']} pl-5 pt-4 pr-5 pb-4 mt-4 mb-4 ml-2`}>
          <ListIcon type='secondary' />
          <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
        </div>
        <div className={`${styles['app-header__logo']} ml-28`}>
          <Logo />
        </div>
        <div
          className={`${styles['app-header__button']} ${styles['app-header__button_last']} pl-5 pt-4 pr-5 pb-4 mt-4 mb-4 ml-2`}
        >
          <ProfileIcon type='secondary' />
          <span className='text text_type_main-default text_color_inactive ml-2'>Личный кабинет</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
