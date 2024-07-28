import github from '../assets/blueGithub.png'
import linkedin from '../assets/blueLinkedin.png'
import mail from '../assets/blueMail.png'
import '../style/headerSocial.css'

function HeaderSocial() {
  return (
    <div className="social">
      <a href="https://github.com/Clv86">
        <img src={github} className="github" alt="github-icon" />
      </a>
      <a href="https://www.linkedin.com/in/charles-louis-velieu">
        <img src={linkedin} alt="linkedin-icon" />
      </a>
      <a href="mailto:charleslouis.velieu@gmail.com">
        <img src={mail} alt="mail-icon" />
      </a>
    </div>
  )
}

export default HeaderSocial
