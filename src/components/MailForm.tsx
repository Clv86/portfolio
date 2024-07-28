import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import '../style/mailForm.css'

function MailForm() {
  const form = useRef<HTMLFormElement>(null)
  const [isSent, setSend] = useState<boolean>(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    if (form.current) {
      e.preventDefault()
      emailjs
        .sendForm(
          import.meta.env.VITE_APP_SERVICE_ID as string,
          import.meta.env.VITE_APP_TEMPLATE_ID as string,
          form.current,
          import.meta.env.VITE_APP_PUBLIC_KEY as string,
        )
        .then(
          () => {
            setSend(true)
            form.current?.reset()
          },
          (error) => {
            console.log(error.text)
          },
        )
    }
  }
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        name="user_name"
        type="text"
        className="feedback-input"
        placeholder="Name"
        onClick={() => setSend(false)}
      />
      <input
        name="user_email"
        type="text"
        className="feedback-input"
        placeholder="Email"
        onClick={() => setSend(false)}
      />
      <textarea
        name="message"
        className="feedback-input"
        placeholder="Message"
        onClick={() => setSend(false)}
      ></textarea>
      {isSent ? <div className="send-message">Message envoyé !</div> : ''}
      <input type="submit" value="Submit" id="input-submit" />
    </form>
  )
}

export default MailForm
