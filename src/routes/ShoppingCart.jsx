import {useState } from 'react'
import './ShoppingCart.css'
import ProductCart from '../components/ProductCart'
import Pay from '../components/Pay'


export default function ShoppingCart() {
  const [array, setArray] = useState(JSON.parse(localStorage.getItem("produtos")) || []);

  const excluir = (id) => {
    const newArray = array.filter((item) => item.id !== id);
    setArray(newArray);
    localStorage.setItem('products', JSON.stringify(newArray));
  };

  const aumentarItem = (id) => {
    const newArray = array.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setArray(newArray);
    localStorage.setItem("produtos", JSON.stringify(newArray));
  };

  const diminuirItem = (id) => {
    const newArray = array.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setArray(newArray);
    localStorage.setItem("produtos", JSON.stringify(newArray));
  };

  // Calcula o total do carrinho
  const total = array
  .reduce((acc, item) => acc + item.price * item.quantity, 0)
  .toFixed(2);

  return (
    <section className="shopping-cart">
      <h1>Shopping cart</h1>
      <div className='products'>
        
        {array.map((item) => ( 
          <div key={item.id}>  
            <ProductCart  
              image={item.image} 
              category={item.category} 
              title={item.title} 
              excluir={() => excluir(item.id)}
              quantity={item.quantity}
              price={item.price}
              aumentarItem={() => aumentarItem(item.id)}
              diminuirItem={() => diminuirItem(item.id)}
            />        
          </div>                   
        ))}
      </div>
      <Pay total={total} />    
    </section>
  );
}

