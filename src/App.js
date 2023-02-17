import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';


import MainPage from './pages/MainPage';
import StorePage from './pages/StorePage';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/store'} element={<StorePage />} />
        <Route path={'/cart'} element={<CartPage />} />
      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
