import React from 'react';
import styles from './HomePage.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a99017dcb075a9db9e993d5786beeb90e597c8528462c88e4aa903d1fe8d1820?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="ModeEclat banner" className={styles.bannerImage} />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c54bc128b1c9ae38c7ddf5d55658b002dce054401156b158ac0709a1182ddca1?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Featured products" className={styles.featuredImage} />
    </header>
  );
};

export default Header;