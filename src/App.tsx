
import { useState } from 'react'
import type { ChangeEvent } from 'react'
import './App.css'

interface User {
  nome: string;
  idade: number;
  CPF: string;
}

function App() {
  const [user, setUser] = useState<User>({ nome: '', idade: 0, CPF: '' });

  const handleChange = (field: keyof User) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = field === 'idade' ? Number(e.target.value) : e.target.value;
    setUser({ ...user, [field]: value });
  }

  const [dadosAtualizados, setDadosAtualizados] = useState<User>({ nome: '', idade: 0, CPF: '' });

  const handleAtualizar = (campo: keyof User) => {
    setDadosAtualizados(prev => ({
      ...prev,
      [campo]: user[campo]
    }));
    console.log(`${campo} atualizado:`, user[campo]);
  };

  return (
    <>
      <div className="container">
        <div className="user-display">
          <h1>Dados do Usuário</h1>
          <div className="user-info">
            <p><strong>Nome:</strong> {dadosAtualizados.nome || '-'}</p>
            <p><strong>Idade:</strong> {dadosAtualizados.idade || '-'}</p>
            <p><strong>CPF:</strong> {dadosAtualizados.CPF || '-'}</p>
          </div>
        </div>

        <div className="input-group">
          <label>Nome: </label>
          <input
            type="text"
            value={user.nome}
            onChange={handleChange('nome')}
          />
          <button onClick={() => handleAtualizar('nome')}>Alterar Nome</button>
        </div>

        <div className="input-group">
          <label>Idade: </label>
          <input
            type="number"
            value={user.idade}
            onChange={handleChange('idade')}
          />
          <button onClick={() => handleAtualizar('idade')}>Alterar Idade</button>
        </div>

        <div className="input-group">
          <label>CPF: </label>
          <input
            type="text"
            value={user.CPF}
            onChange={handleChange('CPF')}
          />
          <button onClick={() => handleAtualizar('CPF')}>Alterar CPF</button>
        </div>
      </div>
    </>
  )
}

export default App
