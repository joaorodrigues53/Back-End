function notas() {
    aluno1 = { PrimeiroNome: "João", Nota: 15 };
    aluno2 = { PrimeiroNome: "Diogo", Nota: 14 };
    aluno3 = { PrimeiroNome: "Guilherme", Nota: 16 };
    todos = [aluno1, aluno2, aluno3];

    console.log(Object.values(aluno1)[1]);
    console.log(Object.values(aluno2)[1]);
    console.log(Object.values(aluno3)[1]);

}
notas()