import InputText from "../inputText";
import Select from "../select";
import './form.css';
import { useState } from "react";


function Form(props) {

  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [team, setTeam] = useState('');


  function handleAdd(e){
    e.preventDefault();
    props.novoColaborador({
      name: name,
      cargo: cargo,
      imagem: imagem,
      team: team
    })
    setName('')
    setCargo('')
    setImagem('')
    setTeam('')
  }


  return (
    <div className="form1">
      <h2>Preencha os dados para criar o card do colaborador</h2>
      <form onSubmit={handleAdd}>
        <InputText 
        label="Nome" 
        placeholder="Digite seu nome"
        valor={name}
        alterado={valor => setName(valor)}
        />

        <InputText 
        label="Cargo" 
        placeholder="Digite seu cargo"
        valor={cargo}
        alterado={valor => setCargo(valor)}
        />

        <InputText 
        label="Imagem" 
        placeholder="Insira sua imagem"
        valor={imagem}
        alterado={valor => setImagem(valor)}
        />

        <Select 
        label="Time"
        teams={props.teams}
        valor={team}
        alterado={valor => setTeam(valor)}
        />

        <button type="submit">Criar Card</button>
      </form>
    </div>
  )
}

export default Form;