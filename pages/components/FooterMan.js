import React from 'react';
import styles from './ManPage.module.css';

const FooterMan = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <a href="#about" className={styles.footerLink}>Sobre a ModeEclat</a>
          <a href="#about-us" className={styles.footerLink}>Sobre nós</a>
        </nav>
        <p className={styles.footerDisclaimer}>Site feito com intuito estudantil</p>
        <div className={styles.paymentInfo}>
          <h3 className={styles.paymentTitle}>Formas de pagamento</h3>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6476e343bc8c30365e5cf0f0e6039fbc08737c9c91f79b08023d54c1b4eb2a21?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Métodos de pagamento aceitos" className={styles.paymentMethods} />
        </div>
      </div>
    </footer>
  );
};

export default FooterMan;