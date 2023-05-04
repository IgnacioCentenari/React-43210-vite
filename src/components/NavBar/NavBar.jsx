import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return(
        <header>
        <div>
            <h2>Golf</h2>
        </div>
        <nav>
            <ul>
                <li><a href="">Remeras</a></li>
                <li><a href="">Camisas</a></li>
                <li><a href="">Sweaters</a></li>
                <li><a href="">Camperas</a></li>
                <li><a href="">Pantalones</a></li>
            </ul>
            <CartWidget />
        </nav>
    </header>
        )
}

export default NavBar;