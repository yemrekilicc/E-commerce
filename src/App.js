import Router from './components/Router/Router'
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <Router />
        {/*<Footer />*/}
      </div>    
    </CartProvider>

  );
}


export default App;
