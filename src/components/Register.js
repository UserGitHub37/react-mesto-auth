import AuthForm from "./AuthForm";
import { Link } from 'react-router-dom';

function Register ({ onLogin }) {

  return (
    <AuthForm title={'Регистрация'} buttonName={'Зарегистрироваться'}>
      Уже зарегистрированы? <Link to="/signin" className="auth__footnote-link">Войти</Link>
    </AuthForm>
  );
}

export default Register;
