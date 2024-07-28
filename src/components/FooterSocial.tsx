import github from '../assets/beigeGithub.png'
import linkedin from '../assets/beigeLinkedin.png'
import mail from '../assets/beigeMail.png'
import '../style/footerSocial.css'

function FooterSocial() {
  return (
    <div className="navIcon">
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

export default FooterSocial
