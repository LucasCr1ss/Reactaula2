

import "../src/App.css";

//importa hook useState da biblioteca React
//Ele permite armazenas valores e atualizar valores automaticametnte
import { useState } from "react";

//cria o compornente principal da aplicação
function App(){

//Estado responsavel por armazenar a cidade digitada
const [cidade, setCidade] = useState("");


const [temperatura, setTemperatura] = useState("");


const [clima, setClima] = useState("");


const [umidade, setUmidade] = useState("");

//Função executada qunado o usuario clicar no botao consultar
async function consultarClima(){
  
  //Verifica se o campo esta vazio
  if(cidade === " ") {
    alert("Digite uma Cidade!");
    return;

  }  

  try {
  
    //faz a requisição para a API
    const resposta = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=4f451574113db9dc8541cd1d40653f98&units=metric&lang=pt_br`
  );
    //converte a resposta pasa JSON
    const dados = await resposta.json();

    //verifica se a cidade foi encontrada 
    if (dados.cod !== 200) {
      alert("Cidade não encontrada!");
      return;
    }

    //atualiza a temperatura
    setTemperatura(dados.main.temp + "°C");

    //atualiza a condição climatica
    setClima(dados.weather[0].description);

    //atualiza a umidade
    setUmidade(dados.main.humidity + "%");

  } catch (erro) {

    console.log(erro);

    alert("Erro ao consultar a API");

  }

}


//Retorna a interface visual do sistema
return (

//container principal da aplicacao
<div className="app-container">   

{/* Titulo Principal */}
<h1>Sistema de Previsão do tempo</h1>

{/* Campo para digitacao */}
<input

type="text"
placeholder="Digite uma cidade"
value={cidade}
onChange={(e) => setCidade(e.target.value)}
/>

{/* Botao de consulta */}
<button

//Executa a funcao consultarClima
onClick={consultarClima}

//Define a margem à esquerda
style={{
  marginLeft: "10px"
}}
>
{/*texto exibido no botao*/}
Consultar
</button>
{/* linha horizontal para separar seçoes */}
<hr />

{/* Exibe a Cidade */}
<h2>Cidade: {cidade}</h2>

{/* Exibe a Temperatura */}
<h2>Temperatura: {temperatura}</h2>

{/* Exibe o Clima */}
<h2>Clima: {clima}</h2>

{/* Exibe a Umidade */}
<h2>Umidade: {umidade}</h2>

</div>

);

}
//Exporta o componente Aoo para ser utilizado no react
export default App;