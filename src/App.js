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
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/Nav';
import MainLayout from './components/MainLayout';
import uniqid from 'uniqid';

const App = () => {

  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  // const [totalPrice, setTotalPrice] = useState([]);


   useEffect(() => {
    if(cart.length === 1) {
      setTotalItems(cart[0].quantity)
    } else if (cart.length > 1) {
      const total = cart.reduce((prev, next) => {
        return prev + next.quantity
      }, 0);
      setTotalItems(total);
    }
  }, [cart]);

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
    const {id} = e.target;
    const added = items.filter(item => item.id === id)[0];
    //If the cart is empty, add the item with a quantity of 1
    if (cart.length === 0) {
      setCart([{id: added.id, quantity: 1}])
    }
    //If the item is already in the cart, increase its quantity by ones
    else if(cart.some(cartItem => cartItem.id === added.id)){
      setCart(cart.map(cartItem =>
        cartItem.id === added.id ? {...cartItem, quantity: (cartItem.quantity + 1)} : {...cartItem}));
    //Else add a new item to the cart
    } else {
      setCart(cart.concat([{id: added.id, quantity: 1}]));
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav totalItems={totalItems} />
        <MainLayout items={items} cart={cart} handleAdd={handleAdd} />
      </div>
    </Router>
  );
}

export default App;
