import React from 'react';

import mealsImage from '../../assests/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;