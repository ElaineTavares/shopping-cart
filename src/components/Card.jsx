
import PropTypes from 'prop-types';
import './Card.css'

export default function Card({image, title, category, price, id}) {


  return (
    <div className="card" id={id}>
        <div className="card-img">
            <img src={image} alt="imagem do produto" />
        </div>
        <div className="card-text">
            <h5>{title}</h5>
            <h6>{category}</h6>
            <p>{price}</p>
        </div> 
    </div>
  )
}

Card.propTypes = {
      image: PropTypes.string.isRequired, // `string` e obrigatório
      title: PropTypes.string.isRequired, // `string` e obrigatório
      category: PropTypes.string.isRequired, // `string` e obrigatório
      price: PropTypes.string.isRequired, // `string` e obrigatório
      id: PropTypes.string.isRequired, // `string` e obrigatório
      addItem: PropTypes.string.isRequired, // `string` e obrigatório
  };