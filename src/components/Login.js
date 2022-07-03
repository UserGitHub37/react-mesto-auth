import { useContext, useState, useEffect } from 'react';
import AuthForm from "./AuthForm";

function Login ({ onLogin, buttonName }) {
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
    <AuthForm title={'Вход'} buttonName={'Войти'}/>
  );
}

export default Login;
