
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';



export default function Pay({total}) {
  let navigate = useNavigate()

  const compraEfetuada = () =>{
    setTimeout(() => {
      navigate("/compraefetuada")
    }, 3000);
  }

  return (
    <div className="pay">
    <h3 className='pay-h3'>Card Details</h3>
    <div>
      <img src="master.png" alt="" />
      <img src="visa.png" alt="" />
      <img src="rupay.png" alt="" />
      <img src="seeall.png" alt="" />
    </div>
    <div>
      <label >Name on card: </label>
      <input type="text" placeholder='name' />
      <label >Card number: </label>
      <input type="text" placeholder='1111 2222 3333 4444' />
      <label >Expiration date: </label>
      <input type="text" placeholder='mm/yy' />
      <label>CVV: </label>
      <input type="text" placeholder='123' />
    </div>
    <div>
      <p style={{fontSize: "14px", marginTop: "10px",  marginBottom: "10px"}}>Total Amount: U$ {total} </p>
    </div>   
    <button onClick={compraEfetuada} className='add-cart'>Complete Purchase</button>
</div>
  )
}

Pay.propTypes = {
  total: PropTypes.number.isRequired, // Valida que 'total' é obrigatório e deve ser um número
};
