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

const App = () => {

  const [items, setItems] = useState(
    [
      {
       name: 'Chrono',
       size: '43mm',
       color: 'Black',
       price: 118,
       image: chronoBlack
      },
      {
        name: 'Classic',
        size: '40mm',
        color: 'Gold',
        price: 158,
        image: classicGold
       },
       {
        name: 'Blacktop',
        size: '42mm',
        color: 'Silver',
        price: 198,
        image: blacktopSilver
       }
    ]
  );

  return (
    <Router>
      <div className="App">
        <Nav />
        <MainLayout items={items} />
      </div>
    </Router>
  );
}

export default App;
