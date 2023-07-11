import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      {!showForm && (
        <button onClick={ handleShowForm }>Cadastrar nova senha</button>
      )}
      {showForm && (
        <Form cancelForm={ handleCancelForm } />

      )}

    </div>
  );
}
export default App;
