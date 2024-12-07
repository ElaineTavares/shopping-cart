import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Home.css'
import { useCartContext } from '../contexts/cart'
// import { useCartContext } from '../contexts/cart'



export default function Home() {
  const {item, addItem} = useCartContext()
  const [products, setProducts] = useState([])

  const api = async () =>{
    try {
      const response = await axios.get (`https://675200a9d1983b9597b51913.mockapi.io/produtos/produtos`)
      const data = response.data
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }


  const adicionar = (product) =>{
    if(!item.some((itm) => itm.id == product.id)){
      addItem(product)
      localStorage.setItem('produtos', JSON.stringify([...item, product]));
      console.log("LOCAL STORAGE", localStorage)
    } else {
        alert("Esse item já está no carrinho")
    }   
  }
 
  useEffect(() => {
   api()
  }, [])


  return (
    <section className="home">
      <h1>Products</h1>
      {products.length === 0 ? (
      <p>Carregando...</p>
      ) : (
        products.map((product) =>
          <div className='home-card' key={product.id} >
              <Card   
              image={product.image} 
              title={product.title} 
              category={product.category} 
              price={product.price}  
              />
              <button className='add-cart' onClick={() => adicionar(product)}>Add to cart</button>
          </div>    
        ))}
    </section>
  )
}
