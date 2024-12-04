import React from 'react';
import styles from './ManPage.module.css';

const HeaderMan = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <nav className={styles.mainNav} aria-label="Main navigation">
          <a href="#women" className={styles.navLink}>Mulher</a>
          <a href="#men" className={styles.navLink} aria-current="page">Homem</a>
        </nav>
        <h1 className={styles.brandName}>ModeEclat</h1>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/57ed9d0f965dafa39d31a920952aba25ca168b6826baf30801c8fef78998b6ef?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="" className={styles.headerImage} />
      </div>
      <nav className={styles.categoryNav} aria-label="Category navigation">
        <a href="#clothes" className={styles.categoryLink}>Roupas</a>
        <a href="#shoes" className={styles.categoryLink}>Sapatos</a>
        <a href="#accessories" className={styles.categoryLink}>Acessórios</a>
      </nav>
    </header>
  );
};

export default HeaderMan;