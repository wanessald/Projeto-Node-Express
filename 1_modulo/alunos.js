const alunos = [
    { nome: "João Vitor", media: 9.5},
    { nome: "Juliana", media: 8.2},
    { nome: "Maria Eduarda", media: 8.8},
    { nome: "Pedro Paulo", media: 6.5},
    { nome: "Ana Carolina", media: 5.5},
];

function filtrarPorNome(nome) {
 return alunos.filter(aluno => aluno.nome === nome);
}

function filtrarPorMedia(media) {
    return alunos.filter(aluno => aluno.media >= media);
}

module.exports = {
    alunos,
    filtrarPorNome,
    filtrarPorMedia,
};