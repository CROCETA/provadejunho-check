import React from 'react';

function ListaTarefas({ tarefas }) {
  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id}>{tarefa.titulo}</li>
      ))}
    </ul>
  );
}

export default ListaTarefas;


