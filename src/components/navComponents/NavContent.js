import { Link } from "react-router-dom"

const NavContent = () => {
    return (
        <ul className="nav-items">
            <li className="items">
                <Link to="/" className="links">Home</Link>
                <div className="underline">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </li>
            <li className="items">
                <Link to="/our-services" className="links">Our Services</Link>
                <div className="underline">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </li>
            <li className="items">
                <Link to="/" className="links">Our Work</Link>
                <div className="underline">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </li>
            <li className="items">
                <Link to="/get-quote" className="links">Contact Us</Link>
                <div className="underline">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </li>
        </ul>
    )
}

export default NavContent