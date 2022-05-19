import './NavBar.css'
import cartWidget from '../cartWidget/cartWidget'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Podio</h1>
            <div>
                <button className="navbar-btn">Deportivo</button>
                <button className="navbar-btn">Urbano</button>
                <button className="navbar-btn">Indumentaria</button>
            </div>
            <cartWidget/>
        </nav>
    )
}

export default NavBar