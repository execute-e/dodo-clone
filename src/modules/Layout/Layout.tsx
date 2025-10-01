import { Routes, Route, Navigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Home from '../Home/Home';
import { usePizzasList } from './usePizzasList';

const Layout = () => {
  const {pizzas, error} = usePizzasList();

  return (
    <div className="bg-white container sm:px-4 sm:mx-auto sm:rounded-2xl sm:mt-10">
      <Header pizzas={pizzas} />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="cart" element={<Cart pizzas={pizzas} err={error}/>} />
          <Route path='*' element={<Navigate to="/home" replace />} />
        </Routes>
      </main>
    </div>
  );
};

export default Layout;