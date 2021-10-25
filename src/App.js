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
  const [totalPrice, setTotalPrice] = useState(0);


   useEffect(() => {
    if(cart.length === 1) {
      setTotalItems(cart[0].quantity)
    } else if (cart.length > 1) {
      const total = cart.reduce((prev, next) => {
        return prev + next.quantity
      }, 0);
      setTotalItems(total);
    }
    else {
      setTotalItems(0)
    }
  }, [cart]);

  useEffect(() => {
    if(cart.length === 0) {
      setTotalPrice(0);
    } else if (cart.length > 0) {
      setTotalPrice(cart.reduce((prev, next) => {
        return prev + (next.price * next.quantity);
      }, 0));
    }
  }, [cart]);

  const [items, setItems] = useState(
    [
      {
       name: 'Chrono',
       size: '43mm',
       color: 'Panther Black',
       price: 138,
       image: chronoBlack,
       id: uniqid()
      },
      {
        name: 'Chrono',
        size: '43mm',
        color: 'White Sandstone',
        price: 138,
        image: chronoSilver,
        id: uniqid()
       },
       {
        name: 'Blacktop',
        size: '42mm',
        color: 'Champion Gold',
        price: 198,
        image: blacktopGold,
        id: uniqid()
       },
       {
        name: 'Legacy',
        size: '42mm',
        color: 'Gunmetal Brown',
        price: 118,
        image: legacySilver,
        id: uniqid()
       },
      {
        name: 'Blacktop',
        size: '42mm',
        color: 'Silver Link',
        price: 198,
        image: blacktopSilver,
        id: uniqid()
       },
       {
        name: 'Legacy',
        size: '42mm',
        color: 'Grizzly Brown',
        price: 118,
        image: legacyGold,
        id: uniqid()
       },
       {
        name: 'Chrono',
        size: '43mm',
        color: 'Classic Gold',
        price: 158,
        image: classicGold,
        id: uniqid()
       },
       {
        name: 'Blacktop',
        size: '42mm',
        color: 'Black Link',
        price: 198,
        image: blacktopBlack,
        id: uniqid()
       },
    ]
  );

  const [showCart, setShowCart] = useState(false);

  const hideCart = () => {
      setShowCart(false);
      //Wait for the opacity transition to complete before adjusting the z-index
      setTimeout(() => {
        document.querySelector('.filter-container').style.zIndex = "-1";
      }, 300);
  }

  const unHideCart = () => {
      setShowCart(true);
      //Adjust the z-index of the filter to the foreground to prevent mouse clicks in the main container
      document.querySelector('.filter-container').style.zIndex = "1";
  }


  const handleAdd = (e) => {
    const {id} = e.currentTarget;
    const added = items.filter(item => item.id === id)[0];
    //If the cart is empty, add the item with a quantity of 1
    if (cart.length === 0) {
      setCart([{
          id: added.id,
          image: added.image,
          name: added.name,
          color: added.color,
          price: added.price,
          quantity: 1}])
    }
    //If the item is already in the cart, increase its quantity by one
    else if(cart.some(cartItem => cartItem.id === added.id)){
      setCart(cart.map(cartItem =>
        cartItem.id === added.id ? {...cartItem, quantity: (cartItem.quantity + 1)} : {...cartItem}));
    //Else add a new item to the cart
    } else {
      setCart(cart.concat([{
        id: added.id,
        image: added.image,
        name: added.name,
        color: added.color,
        price: added.price,
        quantity: 1}]));
    }
  };

  const handleRemove = (e) => {
    const {id} = e.target;
    setCart(cart.filter(item => item.id !== id));
  }

  const handleChange = (e) => {
    const {id, value} = e.target;
    if(value !== 0) {
      setCart(cart.map(item => item.id === id ? {...item, quantity: +value} : {...item}))
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav totalItems={totalItems} unHideCart={unHideCart} />
        <MainLayout
          items={items}
          cart={cart}
          totalPrice={totalPrice}
          showCart={showCart}
          hideCart={hideCart}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleChange={handleChange}
        />
      </div>
    </Router>
  );
}

export default App;
