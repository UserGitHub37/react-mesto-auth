import { Link } from 'react-router-dom';
import AuthForm from "./AuthForm";

function Register ({ onRegister }) {

  return (
    <AuthForm title={'Регистрация'} buttonName={'Зарегистрироваться'} onSubmit={onRegister}>
      <p className="auth__footnote">Уже зарегистрированы? <Link to="/signin" className="auth__footnote-link">Войти</Link></p>
    </AuthForm>
  );
}

export default Register;
