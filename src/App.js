import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import RestaurantsList from './components/RestaurantsList';
import Menu from './components/Menu';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/restaurants'element={<RestaurantsList/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/contact'element={<Contact/>}/>
      <Route path='/cart'element={<Cart/>}/>
      <Route path='/menu/:id'element={<Menu/>}/>
    </Routes>
    </>
  );
}

export default App;
