import { useState } from 'react';
import Display from './Display';
import ServiceTypes from './ServiceTypes';

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
  cancelForm: () => void;
  addService: (service: ServiceTypes) => void;
};

function Form({ cancelForm, addService }: FormProps) {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formValidation, setFormValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(initialPasswordValue);
  const [showPassword, setShowPassword] = useState(false);

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newService: ServiceTypes = {
      service,
      login,
      password,
      url,
    };
    addService(newService);
    setFormValue(initialFormValue);
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

  const handleShowPassword = (event : React.FormEvent) => {
    event.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const {
    isMinLengthValid,
    isMaxLengthValid,
    isNumberAndLether,
    isSpecialCharacters,
  } = passwordValidation;

  return (
    <div>
      <form onSubmit={ handleSubmit }>
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
          type={ showPassword ? 'text' : 'password' }
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
        <button type="button" onClick={ cancelForm }>
          Cancelar
        </button>
        <button
          data-testid="show-hide-form-password"
          onClick={ handleShowPassword }
        >
          Esconder senhas

        </button>
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
