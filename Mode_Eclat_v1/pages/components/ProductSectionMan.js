import React from 'react';
import ProductCard from './ProductCard';
import styles from './ManPage.module.css';

const ProductSectionMan = ({ title, products }) => {
  return (
    <section className={styles.productSection} aria-labelledby={`section-${title.toLowerCase()}`}>
      <h2 id={`section-${title.toLowerCase()}`} className={styles.sectionTitle}>{title}</h2>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
      <button className={styles.viewMoreButton}>Ver mais</button>
    </section>
  );
};

export default ProductSectionMan;