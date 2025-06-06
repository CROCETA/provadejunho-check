import React, { useState } from 'react';

function ListaTarefas({ tarefas, onAlternar, onRemover }) {
  const [filtroDia, setFiltroDia] = useState('');
  const [filtroMateria, setFiltroMateria] = useState('');

  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  const materias = ['Matemática', 'História', 'Física', 'Português'];

  const tarefasFiltradas = tarefas.filter(tarefa => {
    const diaOk = !filtroDia || tarefa.dias.includes(filtroDia);
    const materiaOk = !filtroMateria || tarefa.materia === filtroMateria;
    return diaOk && materiaOk;
  });

  return (
    <div>
      <div>
        <select value={filtroDia} onChange={(e) => setFiltroDia(e.target.value)}>
          <option value="">Filtrar por Dia</option>
          {diasDaSemana.map(d => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select value={filtroMateria} onChange={(e) => setFiltroMateria(e.target.value)}>
          <option value="">Filtrar por Matéria</option>
          {materias.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <ul>
        {tarefasFiltradas.map(tarefa => (
          <li key={tarefa.id} style={{
            textDecoration: tarefa.concluida ? 'line-through' : 'none'
          }}>
            <strong>{tarefa.titulo}</strong> ({tarefa.materia})<br />
            {tarefa.descricao && <span>{tarefa.descricao}<br /></span>}
            Dias: {tarefa.dias.join(', ')}<br />
            <button onClick={() => onAlternar(tarefa.id)}>
              {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => onRemover(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;








