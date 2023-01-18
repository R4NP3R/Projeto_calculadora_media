const form = document.getElementById('form-atividade')

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />'
const atividade =[];
const notas = [];
const txtAprovado = '<span class="resultado aprovado">Aprovado</span>';
const txtReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('digite a nota minima:'))

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionarLinha();
    atualizarTabela();
    atualizaMediaFinal();
})

function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nome-atividade')
    const inputNotaAtividade = document.getElementById('nota-atividade')

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`Atividade de: ${inputNomeAtividade.value} já foi inserida!`);
    } else {
        atividade.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value}</td>`
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</tr>`
        linhas += linha;
    }

    
    inputNomeAtividade.value = ''
    inputNotaAtividade.value= ''
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');   
    corpoTabela.innerHTML = linhas;
}



function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('resultado-media').innerHTML = mediaFinal.toFixed(1);
    document.getElementById('valor-media-final').innerHTML = mediaFinal < notaMinima ? txtReprovado : txtAprovado;
}

function calculaMediaFinal(){
    let somaDasNotas = 0
    for(let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }
    return media = somaDasNotas / notas.length;
}