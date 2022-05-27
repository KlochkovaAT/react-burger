import stylesCardList from './card-list.module.css';
import Card from '../card/card';
import PropTypes from 'prop-types';

const CardList = ({ title, cards }) => {
  return (
    <section className={stylesCardList['card-list']}>
      <h2 className={`${stylesCardList['card-list__title']} pb-6`}>{title}</h2>
      <div className={`${stylesCardList['card-list__container']} ml-4`}>
        {cards.map((card) => (
          <Card key={card._id} {...card} />
        ))}
      </div>
    </section>
  );
};

CardList.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.arrayOf(Card.propTypes)
};

export default CardList;
