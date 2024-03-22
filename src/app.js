import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
})

const app = express();
routes(app);


function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.delete("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluido com sucesso!");
})


export default app;

