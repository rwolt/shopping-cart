import {
  chronoBlack,
  chronoSilver,
  classicGold,
  blacktopBlack,
  blacktopGold,
  blacktopSilver,
  legacyGold,
  legacySilver
} from './images';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import MainLayout from './components/MainLayout';
import uniqid from 'uniqid';

const App = () => {

  const cart, setCart = useState([]);

  const [items, setItems] = useState(
    [
      {
       name: 'Chrono',
       size: '43mm',
       color: 'Black',
       price: 118,
       image: chronoBlack,
       id: uniqid()
      },
      {
        name: 'Chrono',
        size: '43mm',
        color: 'Silver',
        price: 118,
        image: chronoSilver,
        id: uniqid()
       },
       {
        name: 'Blacktop',
        size: '42mm',
        color: 'Gold',
        price: 198,
        image: blacktopGold,
        id: uniqid()
       },
       {
        name: 'Legacy',
        size: '42mm',
        color: 'Gold',
        price: 118,
        image: legacySilver,
        id: uniqid()
       },
      {
        name: 'Blacktop',
        size: '42mm',
        color: 'Silver',
        price: 198,
        image: blacktopSilver,
        id: uniqid()
       },
       {
        name: 'Legacy',
        size: '42mm',
        color: 'Gold',
        price: 118,
        image: legacyGold,
        id: uniqid()
       },
       {
        name: 'Classic',
        size: '40mm',
        color: 'Gold',
        price: 158,
        image: classicGold,
        id: uniqid()
       },
       {
        name: 'Blacktop',
        size: '42mm',
        color: 'Black',
        price: 198,
        image: blacktopBlack,
        id: uniqid()
       },
    ]
  );

  const handleAdd = (e) => {
    const item = 
  }

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <MainLayout items={items} cart={cart} handleAdd={this.handleAdd} />
      </div>
    </Router>
  );
}

export default App;
