import React from 'react';
import styles from './HomePage.module.css';
import Header from '../components/HeaderHome';
import CategorySection from '../components/CategorySectionHome';
import Footer from '../components/FooterHome';

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