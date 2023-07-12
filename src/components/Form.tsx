import { useState } from 'react';
import Display from './Display';

const initialFormValue = {
  service: '',
  login: '',
  password: '',
  url: '',
};
const initialPasswordValue = {
  isMinLengthValid: false,
  isMaxLengthValid: false,
  isNumberAndLether: false,
  isSpecialCharacters: false,
};
type FormProps = {
  cancelForm: () => void,
};

function Form({ cancelForm }: FormProps) {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formValidation, setFormValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(initialPasswordValue);

  const { service, login, password, url } = formValue;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
    validateForm();
    validatePassword();
  };

  const validateForm = () => {
    const isServiceValid = service.trim() !== '';
    const isLoginValid = login.trim() !== '';
    const isPasswordValid = password.length >= 8
      && password.length <= 16
      && /[a-zA-Z]/.test(password)
      && /[0-9]/.test(password)
      && /[!@#$%^&*]/.test(password);

    setFormValidation(isServiceValid && isPasswordValid && isLoginValid);
  };
  const validatePassword = () => {
    const isMinLengthValid = password.length >= 7;
    const isMaxLengthValid = password.length <= 15;
    const isNumberAndLether = /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
    const isSpecialCharacters = /[!@#$%^&*]/.test(password);

    setPasswordValidation({
      isMinLengthValid,
      isMaxLengthValid,
      isNumberAndLether,
      isSpecialCharacters,
    });
  };

  const {
    isMinLengthValid,
    isMaxLengthValid,
    isNumberAndLether,
    isSpecialCharacters } = passwordValidation;
  return (
    <div>
      <form>
        <label htmlFor="service">Nome do serviço</label>
        <input
          type="text"
          id="service"
          name="service"
          value={ service }
          onChange={ handleInputChange }
        />
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          name="login"
          value={ login }
          onChange={ handleInputChange }
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
        />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          value={ url }
          onChange={ handleInputChange }
        />

        <button disabled={ !formValidation }>Cadastrar</button>
        <button onClick={ cancelForm }>Cancelar</button>
      </form>
      <Display
        isMinLengthValid={ isMinLengthValid }
        isMaxLengthValid={ isMaxLengthValid }
        isNumberAndLether={ isNumberAndLether }
        isSpecialCharacters={ isSpecialCharacters }
      />

    </div>
  );
}
export default Form;
