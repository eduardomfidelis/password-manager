type FormProps = {
  cancelForm: () => void,
};
function Form({ cancelForm }: FormProps) {
  return (
    <div>
      <label htmlFor="serviço">Nome do serviço</label>
      <input type="text" id="serviço" />
      <label htmlFor="login">Login</label>
      <input type="text" id="login" />
      <label htmlFor="password">Senha</label>
      <input type="password" id="password" />
      <label htmlFor="url">URL</label>
      <input type="text" id="url" />

      <button>Cadastrar</button>
      <button onClick={ cancelForm }>Cancelar</button>
    </div>
  );
}
export default Form;
