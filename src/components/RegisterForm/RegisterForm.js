import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.registerForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.registerLabel}>
        Username
        <input className={css.registerInput} type="text" name="name" />
      </label>
      <label className={css.registerLabel}>
        Email
        <input className={css.registerInput} type="email" name="email" />
      </label>
      <label className={css.registerLabel}>
        Password
        <input className={css.registerInput} type="password" name="password" />
      </label>
      <button className={css.submitBtn}type="submit">Register</button>
    </form>
  );
};


export default RegisterForm;