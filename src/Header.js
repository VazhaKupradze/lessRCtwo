import './Header.css'


function Header() {

    return (
        <header>
            <div className="header">
                <nav className="navigation">
                    <ul className="nav-list">
                        <a href="#">Home</a>
                        <a href="">Trips</a>
                        <a href="#">About Us</a>
                        <a href="#">Contact</a>
                    </ul>
                </nav>
                <button className="login-btn">Login</button>
            </div>
        </header>
    )

}

export default Header;