// Criando a lista de notas
const notas = [10, 6.5, 8, 7.5];

// Imprimindo a nota no índice 2 (o terceiro elemento: 8)
console.log("The grade at index 2 is:", notas[2]);

// Imprimindo o tamanho da lista utilizando a propriedade length
console.log("The length of the list is:", notas.length);



// Criando a lista inicial
const notasProfessor = [10, 6, 8];

// Adicionando a nota 7 ao final
notasProfessor.push(7);
console.log("List after push:", notasProfessor);

// Removendo a última nota (o 7 que foi inserido por erro)
notasProfessor.pop();
console.log("List after pop:", notasProfessor);

// Calculando a média final das notas restantes
let soma = 0;
for (let i = 0; i < notasProfessor.length; i++) {
    soma += notasProfessor[i];
}
const mediaFinal = soma / notasProfessor.length;
console.log("The final average is:", mediaFinal);


// Parte 1: Dividindo a lista de 10 nomes com slice()
const alunosDez = ["Ana", "Beto", "Carlos", "Diego", "Elena", "Fabio", "Gabi", "Heitor", "Igor", "Julia"];
const sala1 = alunosDez.slice(0, alunosDez.length / 2);
const sala2 = alunosDez.slice(alunosDez.length / 2);

console.log("Students in Room 1:", sala1);
console.log("Students in Room 2:", sala2);

// Parte 2: Atualizando a lista com splice()
const listaNomes = ["João", "Ana", "Caio", "Lara"];
// Remove 2 elementos a partir do índice 1 ("Ana" e "Caio") e adiciona "Rodrigo"
listaNomes.splice(1, 2, "Rodrigo");

console.log("Updated list after splice:", listaNomes);


const salaJS = ["Alice", "Bruno", "Carla"];
const salaPython = ["Daniel", "Eduarda", "Felipe"];

// Unificando as duas listas e concatenando um nome extra diretamente
const salasUnificadas = salaJS.concat(salaPython, "Gabriel");

console.log("Unified classrooms with extra student:", salasUnificadas);


const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 8, 7.5, 9];

// Criando a matriz (lista de duas dimensões)
const listaDeAlunosEMedias = [alunos, medias];

// Acessando o segundo aluno (índice 1 da primeira lista) e sua nota (índice 1 da segunda lista)
console.log("The second student is:", listaDeAlunosEMedias[0][1]);
console.log("Their grade is:", listaDeAlunosEMedias[1][1]);


const listaAlunosBusca = ["João", "Juliana", "Caio", "Ana"];
const listaMediasBusca = [10, 8, 7.5, 9];
const matrizBusca = [listaAlunosBusca, listaMediasBusca];

function verificaAluno(nomeAluno) {
    // Verifica se o aluno está na lista (índice 0 da matriz)
    if (matrizBusca[0].includes(nomeAluno)) {
        // Descobre o índice do aluno
        const indice = matrizBusca[0].indexOf(nomeAluno);
        // Busca a nota no mesmo índice (índice 1 da matriz)
        const nota = matrizBusca[1][indice];
        return `Student ${nomeAluno} found! Grade: ${nota}`;
    } else {
        return `Student ${nomeAluno} was not found.`;
    }
}

console.log(verificaAluno("Juliana"));
console.log(verificaAluno("Rodrigo"));


const numeros = [100, 200, 300, 400];

// For clássico: percorrendo e exibindo valor e índice
for (let i = 0; i < numeros.length; i++) {
    console.log(`Index: ${i} | Value: ${numeros[i]}`);
}

// For of: calculando a soma e a média
const notasRepeticao = [8, 7, 9, 6];
let somaNotas = 0;

for (let nota of notasRepeticao) {
    somaNotas += nota;
}
const mediaRepeticao = somaNotas / notasRepeticao.length;
console.log("The calculated average using for...of is:", mediaRepeticao);

// For invertido: percorrendo de trás para frente
console.log("Looping backwards:");
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Backwards index ${i}:`, numeros[i]);
}


const listaAlunosFiltro = ["Marcos", "Maria", "Pedro", "Paula"];
const listaMediasFiltro = [8.5, 4.5, 7.0, 5.0]; // Supondo média para passar >= 6.0

// O filter recebe o nome do aluno e seu índice atual
const reprovados = listaAlunosFiltro.filter((aluno, indice) => {
    // Retorna true se a nota no mesmo índice for menor que 6
    return listaMediasFiltro[indice] < 6;
});

console.log("The failed students are:", reprovados);