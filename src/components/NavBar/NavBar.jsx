import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to='/' className='LinkGolf'>
                <h3>Golf</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Remera`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Remeras</NavLink>
                <NavLink to={`/category/Campera`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Camperas</NavLink>
                <NavLink to={`/category/Pantalones`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pantalones</NavLink>
                <NavLink to={`/category/Accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
            </div>
            <CartWidget />
        </nav>
        )
}

export default NavBar;