import React, { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import CategoryFilter from './components/CategoryFilter'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>🛒 Shopping App</h1>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onClick={() => setIsDarkMode(!isDarkMode)}
      />

      <CategoryFilter
        categories={["Fruits", "Dairy"]}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <Cart
        cartItems={cartItems}
        onClearCart={() => setCartItems([])}
      />

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={(item) => setCartItems([...cartItems, item])}
      />

      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
    </div>
  )
}

export default App
