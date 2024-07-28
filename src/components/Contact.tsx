import '../style/contact.css'
import { Element } from 'react-scroll'
import ContactWave from './ContactWave'
import MailForm from './MailForm'
import FooterSocial from './FooterSocial'

function Contact() {
  return (
    <div className="contact blue">
      <Element name="contact">
        <div className="contactBloc">
          <h2>Contact</h2>
          <div className="description">
            <p>
              Vous pouvez me contacter par mail ci-dessous ou sur mes différents
              réseaux :
            </p>
          </div>
          <MailForm />
        </div>
        <FooterSocial />
      </Element>
      <ContactWave />
    </div>
  )
}

export default Contact
