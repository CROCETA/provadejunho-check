import React, { useState } from 'react';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (tarefa) => {
    setTarefas([...tarefas, { ...tarefa, id: Date.now(), concluida: false }]);
  };

  const alternarConcluida = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
    ));
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Checklist de Estudos</h1>
      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        onAlternar={alternarConcluida}
        onRemover={removerTarefa}
      />
    </div>
  );
}

export default App;



