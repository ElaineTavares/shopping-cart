import Button from './Button'
import PropTypes from 'prop-types';


export default function ProductCart({id, image, title, category, price, excluir, aumentarItem, quantity, diminuirItem}) {
  
  return (
    <div className='product-cart' id={id}>
            <div className='container-img'>
              <img className='img-cart' src={image} alt="" />
              <div className='product-cart-text'>
                <p>{title}</p>
                <p>{category}</p>
              </div>   
            </div>
            <div className='botoes-cart'>
                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                  <p>{quantity}</p>
                  <div className='botoes'>
                    <Button funcao={aumentarItem}>+</Button>
                    <Button funcao={diminuirItem}>-</Button>
                  </div>
                </div>
                <p>U$ {price * quantity}</p>
                <Button funcao={excluir}>X</Button>
            </div>                   
    </div>
  )
}


ProductCart.propTypes = {
  id: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  image: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  title: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  category: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  price: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  excluir: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  quantity: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  aumentarItem: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
  diminuirItem: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
};

