import { useState } from 'react';
import './App.css';
import Form from './components/Form';

type ServiceTipes = {
  url: string;
  password: string;
  service: string;
  login: string;
};
function App() {
  const [showForm, setShowForm] = useState(false);
  const [services, setService] = useState<ServiceTipes[]>([]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  const handleAddService = (service: ServiceTipes) => {
    setService([...services, service]);
    setShowForm(false);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {!showForm && (
        <>
          {services.length === 0 && <p>nenhuma senha cadastrada</p>}
          <button onClick={ handleShowForm }>Cadastrar nova senha</button>
          {services.map((service) => (
            <div key={ service.service }>
              <a href={ service.url }>{service.service}</a>
              <p>
                Login:
                {' '}
                {service.login}
              </p>
              <p>
                Senha:
                {' '}
                {service.password}
              </p>
            </div>
          ))}
        </>
      )}
      {showForm && (
        <Form cancelForm={ handleCancelForm } addService={ handleAddService } />

      )}

    </div>
  );
}

export default App;
