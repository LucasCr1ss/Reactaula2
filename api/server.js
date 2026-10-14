import express from "express";

import cors from "cors";

//Importa o modulo FS(FIRE SYSTEM)
//Esse modulo permite ler e escrever arquivos utilizando java script 
import fs from "fs";

//Importa a conexão criada com o firebase 
import db from "./firebase.js";

import {
    ref,
    push
} from "firebase/database";

const app = express();

app.use(cors());

//permite que a api receba e interprete dados no formato json
app.use(express.json()); 

let historico = [];

//verifica se o arquivo historico.jspn existe, casp exista os dados serão carregados para dentro do vetor historico
if (fs.existsSysc("./api/historico.json")) {

    const dadosArquivo = fs.readFileSync(
        
        //le o conteudo do arquivo historico.json
        "./api/historico.json",
        "utf8"

    );

    try{
        if (dadosArquivo.trim() !== "") {
            
            //converte o JSON do arquivo para um array JavaScript
            historico = JSON.parse(dadosArquivo);
        
        } else {
        
            historico = [];
        
        }

    } catch {

        historico = [];
    
    }

}

app.get("/historico", (req, res) =>{

    res.json(historico);

});

app.post("/historico", async (req, res) =>{
    
    historico.push(req.body);

    //cria uma referencia chamada "historico" dentro do Firebase. Caso ela n exista, o Firebase irá criá-la automaticamente 
    const referenciaFirebase = ref(
        db,
        "historico"
    );

    //salva uma copia dos dados tambem no firebase. Realtime database(banco que armazena informações em texto)
    await push(

        referenciaFirebase,
        req.body

    );

    //converte o array JavaScript para o formato JSON. O numero 2 deixa o arquivo organizado e legivel
    const historicoJSON = JSON.stringify(
        historico,
        null,
        2
    );

    //salva os dados atualizados no arquivo historico.json
    //assim os registros permaneecem armazenados mesmo após desligar o servidor 
    fa.writeFileSync(

        "./api/historico.json",
        historicoJSON

    );

    //retorna uma mensagem informando que o registro foi salvo com sucesso
    res.json({

        mensagem: "Consulta salva"
    
    });

});

//inicialização do servidor

app.listen(3000, () => {

    console.log("Servidor rodando na porta 3000");

});