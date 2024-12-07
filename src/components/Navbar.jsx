import { Link } from "react-router-dom";
import logo from '/logo-shopping-cart.webp'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">
            <img className="logo" src={logo} alt="logo do site" />
        </Link>

        <Link to="/">Home</Link>
        <Link to="/shoppingcart">Cart</Link>
    </nav>

  )
}
