// 12.04.2023
// GET
const express = require("express");
const { filtrarPorNome, filtrarPorMedia, alunos } = require("./alunos");

const app = express();

app.get("/alunos", (req, res) => {
    const { nome, media } = req.query;
    
    if (nome !== undefined) {
        const alunosFiltradosPorNome = filtrarPorNome(nome);
        res.json(alunosFiltradosPorNome);
      
    } else if (media !== undefined) {
        const alunosFiltradosPorMedia = filtrarPorMedia(media);
        res.json(alunosFiltradosPorMedia);
    } else {
        res.json(alunos);
    }
});
//----------------------------------------------------------------------------
// POST "/alunos/novo"
app.use(express.json());

app.post("/alunos/novo", (req, res) => {
    const { nome, matricula, media } = req.query;
    const novoAluno = {
        nome: nome,
        media: media,
        matricula: matricula
    };
    alunos.push(novoAluno);
    
    if (nome !== undefined && matricula !== undefined && media !== undefined) {
        res.json( {message: "Aluno adicionado com sucesso"} );
    } else {
        res.status(400).json({ error: "Nome, matrícula e média são campos obrigatórios!" });
    }
});
//-----------------------------------------------------------------------------
// POST "/alunos/deletar/:index"
app.use(express.json());

app.post("/alunos/deletar/:index", (req, res) => {
    const index = Number(req.params.index);
    const alunoDelete = alunos[index];
    
    if (alunoDelete) {
        alunos.splice(index); // Splice -> adiciona ou remove elementos
        res.json({ message: "Aluno removido com sucesso!" }); //
    } else {
        res.status(404).json({ message: "Aluno não encontrado!" });
    }
});
//-------------------------------------------------------------------
// POST "/alunos/atualizar/:index"

app.post("/alunos/atualizar/:index", (req, res) => {
    const index = Number(req.params.index);
    const { nome, media } = req.body; // dados a ser atualizados no corpo da req

    if (index >= 0 && index < alunos.length) { // verifica se o indice está dentro do array
    alunos.splice(index, {nome, media});
    res.json({ message: "Aluno atualizado com sucesso!" });
    } else {
        res.status(404).json({ message: "Aluno não encontrado" });
    }
});
//------------------------------------------------------------------------


app.listen(3000);

