import React from 'react';
import styles from '../styles/index.module.css';
import Header from '../components/HeaderHome.js';
import CategorySection from '../components/CategorySectionHome.js';
import Footer from '../components/FooterHome.js';

const HomePage = () => {
  const categories = [
    { name: 'SAPATOS FEMININOS', className: styles.categoryFemaleShoes },
    { name: 'SAPATOS MASCULINOS', className: styles.categoryMaleShoes },
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