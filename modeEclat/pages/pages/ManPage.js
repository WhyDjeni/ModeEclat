import React from 'react';
import Header from './HeaderMan';
import ProductSection from './ProductSectionMan';
import Footer from './FooterMan';
import styles from './ManPage.module.css';

const ManPage = () => {
  const clothesProducts = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe721dda30768329152e804a42b53c4695e7eb698b689106351f481d455452c0?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Comme Des Garçons Play", name: "Camiseta com patch de logo", price: "R$ 993,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/28544e6ff5224518ae343de07278d03b78e389d18735350135ff2f17bf0ccd21?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Polo Ralph Lauren", name: "Camiseta com logo bordado", price: "R$ 492,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/579f4759b564f88a6d3fb5ee6ae508696ea1bf53a37468a48c7a42ca9078314d?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Prada", name: "Camiseta de algodão com logo triangular", price: "R$ 6.200,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/508eb6da2c5d1c5993ced3a590b8bee9aac438798febd8cc444b9d1accd5d8f5?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Palm Angels", name: "Camiseta com estampa de logo", price: "R$ 1.859,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dfca462de73a2ffac5211d2d94ac42342498bca2c9b9df8d62614f571874370?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Burberry", name: "Camisa polo com logo bordado", price: "R$ 2.970,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d709f88688625c352e5a8b43c7aeacdeaf5158aba50ce8879a3d16fe3c80784?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Comme Des Garçons Play", name: "Camiseta mangas curtas com patch", price: "R$ 1.110,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb2b8c647db3baa221ffc13813eecf45d91c7ce112dcb1423c7246ff2803221f?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Off-White", name: "Camiseta Big Bookish Skate", price: "R$ 3.310,00" },
  ];

  const shoesProducts = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e21d9f1cbb379eebd56a13840f83b1f5b004d46c07c518b630b6e5c7b6c1485?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Louis Vuitton", name: "Sneaker LV Trainer", price: "R$8.350,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a02387935ea1b2e31856fc59369bbaa8778efe3efb7b43de1e3947b9ed34817f?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Louis Vuitton", name: "Sneaker LV Trainer", price: "R$9.150,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/dda1a404114ccc4be97da300b3c01e9d38bf5615240bd40183bf68acd19a750f?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Louis Vuitton", name: "Sneaker LV Trainer", price: "R$8.350,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/96ebc4bc3b68b2817f9f1f693af31c0269407bedfb32ff7a0f21734073d87a99?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Louis Vuitton", name: "Sneaker LV Trainer", price: "R$8.350,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a7658341efee06cac95646678d3097ab267d0a773b3b9b4a6fa790330ff4ca6b?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Dolce & Gabanna", name: "Tênis Portofino DG de jacquard", price: "R$ 6.848,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c73a7b300b4a9e54d378a18e1d3b2c5e541bd0663352a76dac1285bad0d4ff4?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Jordan", name: "Tênis Air Jordan 1 Low OG TS \"Travis Scott - Black Phantom\"", price: "R$ 15.108,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/acd08f318f6143025b1555acca3138f8b7aeb9f4e49bcfaa4512f9b7cf593a19?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Jordan", name: "Tênis Air Jordan 4 Retro", price: "R$ 20.489,00" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6476e343bc8c30365e5cf0f0e6039fbc08737c9c91f79b08023d54c1b4eb2a21?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030", brand: "Jordan", name: "Tênis x Travis Scott Air Jordan 1 Low OG", price: "R$ 25.504,00" },
  ];

  return (
    <div className={styles.ManPage}>
      <Header />
      <main className={styles.mainContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0864391eefa7e8d57008ba93fba7f53bb68a708d903d539283ee45fbb04da38?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Banner principal" className={styles.mainBanner} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4ba272c0d96739bad46fb2721df18440d7b1fea4719fd5001a0b3bcd705bfb1?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Banner secundário" className={styles.secondaryBanner} />
        <section className={styles.featuredCollection} aria-labelledby="collection-title">
          <h2 id="collection-title" className={styles.collectionTitle}>Coleção Louis Vuitton</h2>
          <div className={styles.featuredProducts}>
            <ProductCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/380da31a87772a4c59af4c5ac4387173a9557aaf8d0c59e5e27575d63bf2487f?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" brand="Louis Vuitton" name="Paletó Pont Neuf de Lã" price="R$22.200,00" />
            <ProductCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/6a8e9d6a25f40451470f7aa46a01bcf6fabc04225d97ada3af33c3fad2d5783c?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" brand="Louis Vuitton" name="Gravata LV Minimal Bands" price="R$1.630,00" />
          </div>
        </section>
        <section className={styles.callToAction} aria-labelledby="cta-title">
          <div className={styles.ctaContent}>
            <h2 id="cta-title" className={styles.ctaTitle}>Descubra as peças mais exclusivas e sofisticadas do nosso site.</h2>
            <button className={styles.ctaButton}>Compre agora</button>
          </div>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/16c13fc2848528c1fd7a6c85c07a296db52a3bc60c31192ad2cee07884413340?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Imagem de destaque" className={styles.ctaImage} />
        </section>
        <ProductSection title="Camisetas" products={clothesProducts} />
        <div className={styles.bannerGrid}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1dfca462de73a2ffac5211d2d94ac42342498bca2c9b9df8d62614f571874370?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Banner de moda 1" className={styles.bannerImage} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d709f88688625c352e5a8b43c7aeacdeaf5158aba50ce8879a3d16fe3c80784?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" alt="Banner de moda 2" className={styles.bannerImage} />
        </div>
        <section className={styles.accessoriesSection} aria-labelledby="accessories-title">
          <h2 id="accessories-title" className={styles.sectionTitle}>Acessórios</h2>
          <div className={styles.accessoriesGrid}>
            <ProductCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/fb2b8c647db3baa221ffc13813eecf45d91c7ce112dcb1423c7246ff2803221f?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" brand="Louis Vuitton" name="Carteira Slender" price="R$3450,00" />
            <ProductCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/1202849e371df88b77b4a8d61d94592b660251fe4b075380b2834e53b94720bc?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" brand="Louis Vuitton" name="Óculos de Sol Quadrados Grandes LV Legacy" price="R$5.350,00" />
            <ProductCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd8fb5db2fd7f75e582b5c508c24c4b8b4aa07b34aa786008b8a294c2c9f9cb?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" brand="Louis Vuitton" name="Pingente LV Instinct" price="R$3.900,00" />
            <ProductCard image="https://cdn.builder.io/api/v1/image/assets/TEMP/465a11de5292588ede7ce40d9154a27e77414cedcea5d072a907f91b56adec38?placeholderIfAbsent=true&apiKey=0c9f602e70454795bc5c3060fa79b030" brand="Versace" name="Relógio La Greca de 28mm" price="R$ 16.947" />
          </div>
          <button className={styles.viewMoreButton}>Ver mais</button>
        </section>
        <ProductSection title="Sapatos" products={shoesProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default ManPage;