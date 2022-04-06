import { useState } from "react";

function Form() {
  function Cadastrar(event) {
    event.preventDefault();

    console.log(`Usuário ${name} foi cadastrado com a senha ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <h1>Cadastro</h1>
      <form onSubmit={Cadastrar}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"

            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </>
  );
}

export default Form;
