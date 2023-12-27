
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componets/Home';
import About from './componets/About';
import Product from './componets/Product';
import Navbar from './componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
