import DropdownMenu from './DropdownMenu'
import HeaderSocial from './HeaderSocial'

function Header() {
  return (
    <div className="hero-header">
      <div className="title">
        <div className="small-title">
          <h1>Charles-Louis Velieu</h1>
          <DropdownMenu />
        </div>
        <h2>Apprenti développeur Full Stack</h2>
      </div>
      <HeaderSocial />
    </div>
  )
}

export default Header
