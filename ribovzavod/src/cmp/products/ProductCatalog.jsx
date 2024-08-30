import React, { useState, useEffect } from 'react';
import CategoryNav from './CategoryNav';
import ProductGrid from './ProductGrid';
import CategoryHeader from './CategoryHeader';

const ProductCatalog = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request_type = 0;
        const secretToken = 'Дайте пожожда джейсон каталога плез';

        // Кодируем параметры для URL
        const url = new URL(`http://localhost:3000/get-catalog-data`);
        url.searchParams.append('request_type', request_type);
        url.searchParams.append('secretToken', secretToken);

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data.categories);
        setSelectedCategory(data.categories[0].id); // Устанавливаем первую категорию
      } catch (error) {
        console.error('Error fetching catalog data:', error);
      }
    };

    fetchData();
  }, []);

  // Получаем выбранную категорию
  const selectedCat = categories.find(category => category.id === selectedCategory);
  const filteredProducts = selectedCat ? selectedCat.products : [];

  return (
    <main className="p-8 flex flex-col rounded-none">
      <CategoryNav
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      {selectedCat && (
        <React.Fragment key={selectedCat.id}>
          <CategoryHeader
            title={selectedCat.name}
            onViewMore={() => console.log(`View more for ${selectedCat.name}`)}
          />
          <ProductGrid products={filteredProducts} />
        </React.Fragment>
      )}
    </main>
  );
};

export default ProductCatalog;