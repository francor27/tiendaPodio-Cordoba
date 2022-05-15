import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">Podio</h1>
            <div>
                <button className="navbar-btn">Deportivo</button>
                <button className="navbar-btn">Urbano</button>
                <button className="navbar-btn">Indumentaria</button>
            </div>
        </nav>
    )
}

export default NavBar