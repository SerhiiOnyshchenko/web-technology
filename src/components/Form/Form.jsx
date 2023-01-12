import s from './index.module.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import MaskInput from 'components/MaskInput';
import { toast } from 'react-toastify';

export default function Form() {
  const form = useRef();
  const [errorInput, setErrorInput] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const sendEmail = e => {
    e.preventDefault();
    const nameValue = form.current.name.value;
    const phoneValue = form.current.phone.value;
    const emailValue = form.current.email.value;

    if (nameValue.trim().length < 3) {
      toast.error('Name should be more 3 letter');
      setErrorInput(prev => ({ ...prev, name: true }));
      return;
    } else {
      setErrorInput(prev => ({ ...prev, name: false }));
    }
    if (!validatePhone(phoneValue)) {
      toast.error('Not validate phone');
      setErrorInput(prev => ({ ...prev, phone: true }));
      return;
    } else {
      setErrorInput(prev => ({ ...prev, phone: false }));
    }
    if (!validateEmail(emailValue)) {
      toast.error('Not validate email');
      setErrorInput(prev => ({ ...prev, email: true }));
      return;
    } else {
      setErrorInput(prev => ({ ...prev, email: false }));
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        result => {
          toast.success('Request was send');
          form.current.reset();
        },
        error => {
          toast.error(error.text);
        }
      );
  };

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = phone => {
    return phone.match(/^\+38\(0..\)...-..-../);
  };

  return (
    <form className={s.Form} ref={form} onSubmit={sendEmail} method="POST">
      <h3 className={s.Title}>Discuss the project</h3>
      <div className={s.BoxName}>
        <label className={s.Label} htmlFor="name">
          First Name*
        </label>
        <input
          className={errorInput.name ? s.Error : s.Input}
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
          className={errorInput.phone ? s.Error : s.Input}
          type="phone"
          name="phone"
          id="phone"
          placeholder="+380"
          data-pattern="+**(***)***-**-**"
          data-prefix="+38("
          onInput={MaskInput.maskInput}
          onFocus={MaskInput.onMaskedInputFocus}
          onBlur={MaskInput.onMaskedInputBlur}
        />
      </div>
      <label className={s.Label} htmlFor="email">
        Your Email*
      </label>
      <input
        className={errorInput.email ? s.Error : s.Input}
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
