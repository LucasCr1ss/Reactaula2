//Importa a biblioteca express, responsavel por criar o servidor e as rotas da API
import express from "express";

//Importa a biblioteca CORS, que permite a comnicação entre aplicações executadas em portas diferentes(React e API) 
import cors from "cors";





//cria uma instancia da aplicacao do express
const app = express();

//habilita o cors para permitir requisições vindas do react
app.use(cors());

//permite que a api receba dados no formato JSON
app.use(express.json());

//Vetor reponsavel por armazenar temporariamente todas as consultas realizadas pelo usuario
let historico = [];

//METODO GET 
//Utilizado para consultar informações, ja armazenadas na API
//Rota responsavel por retornar todo o historico
app.get("/historico", (req, res) => {

//envia a lista completa de consultas em formato json
res.json(historico);

})

//METODO POST
//Utilizado para enviar informaçoes para a API 
app.post("/historico", (req, res) => {

    //Adiciona os dados  recebidos pelo reacr ao vetor de historico
    historico.push(req.body);

    res.json({
    mensagem: "Consulta salva!"
    });

});

//inicia a API na porta 3000
app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000")

});