import PropType from 'prop-types'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg text-light bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.mode === 'light' ? 'dark' : 'light'}`} to="/">{props.title}</Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link active text-${props.mode === 'light' ? 'dark' : 'light'} `} to="/about">{props.about}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>

            {/* <div className="btn-group mx-2" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                <label className="btn btn-outline-primary" htmlFor="btnradio1">Green</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio2">Red</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                <label className="btn btn-outline-primary" htmlFor="btnradio3">Blue</label>
            </div> */}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} Mode`}</label>
            </div>
        </nav>
    );
}

export default Navbar;

Navbar.propTypes = { // after making it "isRequired" we have to set the values of props
    title: PropType.string.isRequired,
    about: PropType.string.isRequired,
};

Navbar.defaultProps = {
    title: "Set Title",
    about: "Set About Title",
};