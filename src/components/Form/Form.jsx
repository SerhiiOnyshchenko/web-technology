import s from './index.module.css';

export default function Form() {
  const submit = e => {
    e.preventDefault();
    console.log(e.target.message.value);
  };
  return (
    <form className={s.Form} onSubmit={submit}>
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
