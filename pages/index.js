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
          <div key={index} className={category.className}>
            {category.Link ? (
              <Link href={category.link}>
                <a className={styles.button}>{category.name}</a>
              </Link>
            ) : (
              <CategorySection name={category.name} className={category.className}/>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default HomePage;