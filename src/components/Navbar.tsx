import { Link } from 'react-scroll'
import '../style/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <ul id="navbar">
        <li>
          <Link to="about" smooth={true} duration={500} tabIndex={0}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} tabIndex={0}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} tabIndex={0}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
