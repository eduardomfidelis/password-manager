import { useState } from 'react';

const initialFormValue = {
  service: '',
  login: '',
  password: '',
  url: '',
};
type FormProps = {
  cancelForm: () => void,
};

function Form({ cancelForm }: FormProps) {
  const [formValue, setFormValue] = useState(initialFormValue);
  const [formValidation, setFormValidation] = useState(false);
  const { service, login, password, url } = formValue;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
    validateForm();
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

  return (
    <div>
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
    </div>
  );
}
export default Form;
