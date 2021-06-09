import './app.scss';
import Header from './Componets/Header';
import ProductCard from './Componets/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCard />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
