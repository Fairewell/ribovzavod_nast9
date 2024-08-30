import React, { useState, useEffect } from 'react';
import CategoryNav from './CategoryNav';
import ProductGrid from './ProductGrid';
import CategoryHeader from './CategoryHeader';
import Cart from './Cart'; // Импортируем компонент корзины

const ProductCatalog = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [cartItems, setCartItems] = useState([]); // Состояние для корзины
  const [isOpen, setIsOpen] = useState(false);

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

  const selectedCat = categories.find(category => category.id === selectedCategory);
  const filteredProducts = selectedCat ? selectedCat.products : [];

  const handleAddToCart = (product) => {
    const id = cartItems.length + 1; // Генерируем новый ID
    const newProduct = { id, ...product }; // Создаем новый объект продукта с новым ID
    console.log(newProduct);
    setCartItems([...cartItems, newProduct]); // Добавляем новый продукт в корзину
    console.log(cartItems);
    
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };


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
          <ProductGrid products={filteredProducts} onAddToCart={handleAddToCart} />
        </React.Fragment>
      )}
      <div className="fixed bottom-4 right-4">
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} isOpen={isOpen} />
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-500 text-white p-4 rounded-full shadow-lg"
        >
            🛒
            {cartItems.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">{cartItems.length}</span>}
        </button>
      </div>
    </main>
  );
};

export default ProductCatalog