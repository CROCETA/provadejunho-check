import React, { useState } from 'react';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { ...tarefa, id: Date.now(), concluida: false }]);
  };

  return (
    <div className="app-container">
      <h1>Checklist</h1>
      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />
      <ListaTarefas tarefas={tarefas} />
    </div>
  );
}

export default App;

