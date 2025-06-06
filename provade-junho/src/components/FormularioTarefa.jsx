import React, { useState } from 'react';

function FormularioTarefa({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dia, setDia] = useState('');
  const [materia, setMateria] = useState('');

  const materias = ['Matemática', 'História', 'Física', 'Português'];
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  const aoEnviar = (e) => {
    e.preventDefault();
    if (!titulo || !materia || !dia) return;

    onAdicionarTarefa({ titulo, descricao, dias: [dia], materia });
    setTitulo('');
    setDescricao('');
    setDia('');
    setMateria('');
  };

  return (
    <form onSubmit={aoEnviar}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      
      <select value={dia} onChange={(e) => setDia(e.target.value)}>
        <option value="">Selecionar Dia</option>
        {diasDaSemana.map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>

      <select value={materia} onChange={(e) => setMateria(e.target.value)}>
        <option value="">Selecionar Matéria</option>
        {materias.map(m => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;




