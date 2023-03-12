import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form 
      className={css.loginForm } 
      onSubmit={handleSubmit} 
      autoComplete="off">
        <label className={css.loginLabel}>
          Email
          <input className={css.loginInput} type="email" name="email" />
        </label>
        <label className={css.loginLabel}>
          Password
          <input className={css.loginInput} type="password" name="password" />
        </label>
        <button className={css.submitBtn} type="submit">Log In</button>
    </form>
  );
};
