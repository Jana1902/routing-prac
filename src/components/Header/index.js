import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <nav>
      <div className="logo-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="logo"
          alt="wave"
        />
        <h1>Wave</h1>
      </div>
      <ul>
        <li className="nav-list">
          <Link to="/" className="nav-list">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-list">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-list">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
