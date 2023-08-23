import React from 'react';
import './App.css'; // Importa tus estilos
import Navbar from './components/Navbar'; // Importa el componente Navbar
import ProductList from './components/ProductList'; // Importa el componente ProductList

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="App-main">
        <ProductList />
      </main>
      <footer className="App-footer">
        {/* Pie de página */}
      </footer>
    </div>
  );
}

export default App;
