import React from 'react';
import styles from './ManPage.module.css';

const ProductCardMan = ({ image, brand, name, price }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.productImageWrapper}>
        <img src={image} alt={name} className={styles.productImage} />
      </div>
      <h3 className={styles.productBrand}>{brand}</h3>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice} aria-label={`Price: ${price}`}>{price}</p>
    </article>
  );
};

export default ProductCardMan;