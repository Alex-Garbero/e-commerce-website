import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { Cart } from './Pages/Cart';
import { ShopCategory } from './Pages/ShopCategory';
import { Product } from './Pages/Product';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* Based on the browser path --> set page to element */}
        <Route path='/' element={<Shop/>}/>
        <Route path='/bottoms' element={<ShopCategory category='bottoms'/>}/>
        <Route path='/tops' element={<ShopCategory category='tops'/>}/>
        <Route path='/accessories' element={<ShopCategory category='accessories'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
