import AuthForm from "./AuthForm";

function Login ( {onLogin} ) {

  return (
    <AuthForm title={'Вход'} buttonName={'Войти'} onSubmit={onLogin}/>
  );
}

export default Login;
