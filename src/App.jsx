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
function consultarClima () {

  if (
    cidade.toLowerCase === "são paulo" ||
    cidade.toLowerCase() === "são paulo"
  ) {

    //Atualiza a temperatura 
    setTemperatura("24°");
    
    //Atualiza O CLIMA
    setClima("Ensolarado");

    //Atualiza a umidade    
    setUmidade("60%");
  }

  else if (cidade.toLowerCase() === "curitiba" || 
  cidade.toLowerCase() === "curitiba" ){

    setTemperatura("17");
     
    setClima("Chuvoso");

    setUmidade("85%");

  } 
  else if (cidade.toLowerCase() === "goiania" || 
  cidade.toLowerCase() === "goiania"){

    setTemperatura("32");
     
    setClima("Seco");

    setUmidade("20%"); 

  }
  else if (cidade.toLowerCase() === "Minas Gerais" || 
  cidade.toLowerCase() === "Minas Gerais"){

    setTemperatura("22");
     
    setClima("Ameno");

    setUmidade("50%");

  }
  else {
    setTemperatura("--");

    setCidade("Cidade não cadastrada");

    setUmidade("--");
  }
}
//Retorna a interface visual do sistema
return (

//container principal da aplicacao
<div
style={{
  padding: "20px",
  fontFamily: "Arial"
}}
>

{/* Titulo Principal */}
<h1>Sistema de Previsão do tempo</h1>

{/* Campo para digitacao */}
<input

type="text"
placeholder="Digite uma cidade"
value={cidade}
onChange={(e) => setCidade(e.target.value)}
/>

{/* Texto exibido no botao */}
Consultar

{/* Botao de consulta */}
<button

//Executa a funcao consultarClima
onClick={consultarClima}

//Define a margem à esquerda
style={{
  marginLeft: "10px"
}}
>

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

)

}
//Exporta o componente Aoo para ser utilizado no react
export default App;