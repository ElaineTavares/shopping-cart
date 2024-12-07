
import PropTypes from 'prop-types';

export default function Button({children, funcao}) {
  return (
    <button style={{fontWeight: "bold", width: "15px", cursor: "pointer"}} onClick={() => funcao()}>{children}</button>
  )
}


Button.propTypes = {
    children: PropTypes.string.isRequired, // `string` e obrigatório
    funcao: PropTypes.string.isRequired, // `string` e obrigatório
};
