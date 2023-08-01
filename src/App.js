import "./styles.css"
import {FiSearch} from"react-icons/fi"
import { useState } from "react";
import api from "./service/api";

function App() {

  const [input, setInput] = useState ('');
  const [cep , setCep] = useState({});
  async function handleSeach(){

    if(input === ''){
    alert("Digite um Cep !!!")
    return;
  }

  try{
    const response = await api.get(`${input}/json`)
    setCep(response.data)
    setInput("");
  }catch{
      alert("erro ao procurar")
      setInput("")
  }
}
  return (
   
    <div className="container">
      <h1 className="title"> Buscar CEP </h1>

    <div className="containerInput">
      <input type="text" placeholder="Digite seu cep ..." 
      value={input}
      onChange={(event) => setInput(event.target.value)}
      />
      <button className="buttonSearch" onClick={handleSeach}>
        <FiSearch size={25} color="#ffg"/>
      </button>

      </div>
      {Object.keys(cep).length>0 && (
     <main className="main">

          <h2> CEP : {cep.cep} </h2>

          <span> {cep.logradouro} </span>
          <span> {cep.complemento} </span>
          <span>{cep.bairro} </span>
          <span>{cep.localidade},{cep.uf}</span>

      </main>
      
      )}
      
  </div>
  );
}

export default App;
