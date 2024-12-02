import React from 'react';
import styles from './HomePage.module.css';

// Componente CategorySection
const CategorySection = ({ name, className }) => {
  // Imagem de fundo com nome dinâmico no alt
  return (
    <section className={`${styles.categorySection} ${className}`}>
      <h2 className={styles.categoryTitle}>{name}</h2>
      <img 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e542b95d9f38833c8eb5070b9fd091dfbb30470ce48ec649bdee73073032725e?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" 
        alt={`${name} background`}  // Texto alternativo descritivo para a imagem
        className={styles.categoryBackground} 
        aria-hidden="true" // Adicionando para ocultar a imagem do leitor de tela, já que o alt é descritivo
      />
    </section>
  );
};

export default CategorySection;
