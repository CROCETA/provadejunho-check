import React, { useState } from 'react';

function FormularioTarefa({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState('');

  const aoEnviar = (e) => {
    e.preventDefault();
    if (!titulo) return;
    onAdicionarTarefa({ titulo });
    setTitulo('');
  };

  return (
    <form onSubmit={aoEnviar}>
      <input
        placeholder="Título da tarefa"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormularioTarefa;

