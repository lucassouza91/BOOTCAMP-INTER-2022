const alunos = [
    {
        nome: 'Joao',
        nota: 7,
        Turma: '1B',
    },
    {
        nome: 'Pedro',
        nota: 10,
        Turma: '1B',
    },
    {
        nome: 'Miguel',
        nota: 7,
        Turma: '1B',
    },
];
function alunosAprovados (array, media){
    let aprovados = [];
    for(let i = 0; i <array.length; i++){
        const {nome, nota} = array[i];
        if(nota >= media){
            aprovados.push(nome)
        }
    }
return aprovados;
}
console.log(alunosAprovados(alunos, 5));