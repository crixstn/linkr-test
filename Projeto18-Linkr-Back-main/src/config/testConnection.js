import { Client } from "pg";

const client = new Client({
  host: "localhost", // Endereço do banco de dados
  port: 5432, // Porta do banco de dados
  user: "postgres", // Usuário do banco
  password: "sua-senha", // Senha do banco
  database: "nome-do-banco", // Nome do banco de dados
});

client
  .connect()
  .then(() => {
    console.log("Conexão com o banco de dados bem-sucedida!");
    client.end(); // Fecha a conexão ao finalizar
  })
  .catch((err) => {
    console.error("Erro na conexão:", err.stack);
  });
