import React from 'react';
import styles from './HomePage.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav} aria-label="Informações da empresa">
        <h2 id="about-heading">Sobre a ModeEclat</h2>
        <ul aria-labelledby="about-heading">
          <li><a href="#about">Sobre nós</a></li>
        </ul>
      </nav>
      <div className={styles.footerContent}>
        <p className={styles.footerDisclaimer}>Site feito com intuito estudantil</p>
        <div className={styles.paymentMethods}>
          <h3>Formas de pagamento</h3>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6476e343bc8c30365e5cf0f0e6039fbc08737c9c91f79b08023d54c1b4eb2a21?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Métodos de pagamento aceitos" className={styles.paymentImage} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;