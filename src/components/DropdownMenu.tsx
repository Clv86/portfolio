import { useState } from 'react'
import dropdown from '../assets/dropdown.svg'
import { Link } from 'react-scroll'
import '../style/dropdownMenu.css'

function DropdownMenu() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="dropdown-menu">
      <img
        src={dropdown}
        alt="dropdown-icon"
        className="dropdown-icon"
        onClick={handleOpen}
      />
      {open ? (
        <div className="dropdown-content">
          <Link
            to="about"
            smooth={true}
            duration={500}
            tabIndex={0}
            className="link"
          >
            À propos
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            tabIndex={0}
            className="link"
          >
            Projets
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            tabIndex={0}
            className="link"
          >
            Contact
          </Link>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default DropdownMenu
