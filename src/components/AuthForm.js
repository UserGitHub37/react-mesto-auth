import { useContext, useState, useEffect } from 'react';

function AuthForm ({ onLogin, title, buttonName, children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onLogin({
      email,
      password,
    });
  }

  return (
    <main className="content page__content">
      <div className='auth content__auth'>
        <h2 className='auth__title'>{title}</h2>
        <form className='auth__form' action='#' name='login' noValidate onSubmit={handleSubmit}>

          <input className='auth__input auth__input_field_email' id='email-input' type='email' name='email' placeholder='Email' minLength='5' maxLength='40' required value={email ? email : ''} onChange={handleChangeEmail}/>
          <span className='auth__error-message email-input-error'></span>

          <input className='auth__input auth__input_field_password' id='password-input' type='password' name='password' placeholder='Пароль' minLength='5' maxLength='50' required value={password ? password : ''} onChange={handleChangePassword}/>
          <span className='auth__error-message password-input-error'></span>

          <button type='submit' className='auth__submit-button'>{buttonName}</button>
        </form>
        <p className="auth__footnote">{children}</p>
      </div>
    </main>
  );
}

export default AuthForm;
