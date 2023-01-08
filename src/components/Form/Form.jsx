import s from './index.module.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export default function Form() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text);
          form.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className={s.Form} ref={form} onSubmit={sendEmail} method="POST">
      <h3 className={s.Title}>Discuss the project</h3>
      <div className={s.BoxName}>
        <label className={s.Label} htmlFor="name">
          First Name*
        </label>
        <input
          className={s.Input}
          type="text"
          name="name"
          id="name"
          placeholder="Your Name"
        />
      </div>
      <div className={s.BoxPhone}>
        <label className={s.Label} htmlFor="phone">
          Phone number*
        </label>
        <input
          className={s.Input}
          type="phone"
          name="phone"
          id="phone"
          placeholder="+380"
        />
      </div>
      <label className={s.Label} htmlFor="email">
        Your Email*
      </label>
      <input
        className={s.Input}
        type="email"
        name="email"
        id="email"
        placeholder="Yourname@gmail.com"
      />
      <label className={s.Label} htmlFor="Message">
        Message
      </label>
      <textarea
        className={s.Textarea}
        placeholder=" "
        name="message"
        id="Message"
      />
      <button className={s.Submit} type="submit">
        Request a call
      </button>
    </form>
  );
}
