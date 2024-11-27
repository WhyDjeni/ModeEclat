import React from 'react';
import Link from 'next/link.js';
import styles from './HomePage.module.css';
import Header from './HeaderHome.js';
import CategorySection from './CategorySectionHome.js';
import Footer from './FooterHome.js';

const HomePage = () => {
  const categories = [
    { name: 'WOMANS', className: styles.categoryFemale },
    { name: 'MANS', className: styles.categoryMale, Link:'./ManPage.js' },
    { name: 'ROUPAS FEMININAS', className: styles.categoryFemaleClothes },
    { name: 'ROUPAS MASCULINAS', className: styles.categoryMaleClothes },
    { name: 'ACESSÓRIOS MASCULINOS', className: styles.categoryMaleAccessories },
  ];

  return (
    <main className={styles.mainContainer}>
      <Header />
      <section className={styles.categoriesSection} aria-label="Categorias de produtos">
        {categories.map((category, index) => (
          <CategorySection key={index} name={category.name} className={category.className} />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;