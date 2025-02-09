
function enesimoFibonacci() {
    let anterior = 0;
    let atual = 1;
    let proximo;
    let cont = 2;
    let enesimo = document.querySelector('#ex1').value;

    while (cont < enesimo) {
        proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
        cont ++;
    }

    let resultado1 = document.querySelector('#resp1');
    resultado1.innerHTML = "O n-ésimo número da sequência é: " + proximo;
}

function maiorPalavra() {
    //const regex = /^[a-zA-Z]$/;
    const regex = /^[a-zA-ZÀ-ÿ]$/;
    let palavra = ""
    let maiorPalavra = ""
    let i = 0;
    let texto = document.querySelector('#ex2').value;
    let total = texto.length + 1

    while (i <= total) {
        if (texto.charAt(i) === " " || i === total || regex.test(texto.charAt(i)) === false) {
            tMaiorPalavra = maiorPalavra.length;
            tPalavra = palavra.length;
                if (tPalavra >= tMaiorPalavra) {
                    maiorPalavra = palavra;
                    palavra = "";
                } else {
                    palavra = "";
                }
            console.log(maiorPalavra)
        } else {
        palavra = palavra + texto.charAt(i)
        }
        i++;
    }

    let resultado2 = document.querySelector('#resp2');
    resultado2.innerHTML = "A maior palavra da frase é: " + maiorPalavra;
}

function crescimentoPopulacional() {
    let popA = parseInt(document.querySelector('#popA').value); //precisa ser menor que popB//
    let popB = parseInt(document.querySelector('#popB').value); //precisa ser maior que popA//
    let resultado3 = document.querySelector('#resp3');
    let txA = 0.02;
    let txB = 0.01;
    let razaoPop;
    let razaoTx;
    let n;

    if (popA >= popB) {
        resultado3.innerHTML = ("A população do país A já maior ou igual à população do país B!");
    } else {
        razaoPop  = popA/popB;
        razaoTx = ((1 + txB) / (1 + txA))
        n = parseInt((Math.log(razaoPop) / Math.log(razaoTx)))
        resultado3.innerHTML = ("A população do país B vai igualar ou ultrapassar a população do país B em aproximadamente " + n + " anos.");
    }
}

function quantidadePrimos() {
    let numeroN = parseInt(document.querySelector('#ex4').value);
    let resultado4 = document.querySelector('#resp4');
    let lista = [2];
    let n = 2;
    let cont = 1;

    while (n <= numeroN) {
        if (n % 2 == 0) {
            n++;
        } else if (n != 3 && n % 3 == 0) {
            n++;
        } else if (n != 5 && n % 5 == 0) {
            n++;
        } else if (n != 7 && n % 7 == 0) {
            n++; 
        } else {
            lista.push(n);
            cont++;
            n++;
        }
    }

    resultado4.innerHTML = ("Há " + cont + " números primos entre 2 e " + (n - 1) + ":<br>" + lista);
}

//UDFs//
Math.fatorial = function(i) {
    if (i === 0 || i === 1) {
        return 1;
    } else {
        return i * Math.fatorial(i - 1);
    }
}
//UDFs//
function formatarReal(valor) {
    // Cria um formatador para o formato de moeda BRL (Real brasileiro)
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
});
    return formatador.format(valor);
}
//UDFs
function qtdeQuinas(n, k) {
    let primeiroFatorQuinas;
    let segundoFatorQuinas;

    primeiroFatorQuinas = Math.fatorial(k) / (Math.fatorial(5) * Math.fatorial(k-5));
    segundoFatorQuinas = Math.fatorial(n-k) / Math.fatorial((n-k)-1);
    return primeiroFatorQuinas * segundoFatorQuinas;
}
//UDFS
function qtdeQuadras(n, k) {
    let primeiroFatorQuadras;
    let segundoFatorQuadras;

    primeiroFatorQuadras = Math.fatorial(k) / (Math.fatorial(4) * Math.fatorial(k-4));
    segundoFatorQuadras = Math.fatorial(n-k) / (Math.fatorial(2) * Math.fatorial((n-k)-2));
    return primeiroFatorQuadras * segundoFatorQuadras;
}
//UDFS


function calcularValor() {
    let quantidade = parseInt(document.querySelector('#ex5').value);
    let resultado5 = document.querySelector('#resp5');
    let quantidadeTotal = Math.fatorial(quantidade) / (Math.fatorial(6) * Math.fatorial(quantidade - 6))
    let valorTotal = formatarReal(quantidadeTotal * 5);
    resultado5.innerHTML = ("O valor total da aposta será de " + valorTotal);

    const gerar = document.createElement('button');
    gerar.textContent = "Gerar";
    gerar.addEventListener ('click', gerarAposta);
    const adicionar = document.getElementById('botao-gerar');
    adicionar.appendChild(gerar);
}

function gerarAposta() {
    let maximo = 60;
    let lista = [];
    let quantidade = parseInt(document.querySelector('#ex5').value);
    let aAposta = document.querySelector('#surpresinha');
    let cont = 1;
    let volante = [];

    for (let i = 1; i <= 60; i++) {
        lista.push(i);
    }
    
    while (cont <= quantidade) {
        let iAposta = parseInt(Math.random() * maximo);
        let numAposta = lista[iAposta];
        volante.push(numAposta);
        let indice = lista.indexOf(numAposta)
        lista.splice(indice, 1);
        cont++;
        maximo--;
    }

    volante.sort((a,b) => a - b);
    textoVolante = volante.join(" - ")

    aAposta.innerHTML = ("Sua aposta supresinha é: " + textoVolante);

    const sortear = document.createElement('button');
    sortear.textContent = "Sortear";
    sortear.addEventListener ('click', sortearMega);
    const adicionar = document.getElementById('botao-sortear');
    adicionar.appendChild(sortear);
}

function sortearMega() {

    let maximo = 60;
    let disponiveis = [];
    let quantidade = 6;
    let oSorteio = document.querySelector('#result-sorteio');
    let cont = 1;
    let sorteados = [];

    for (let i = 1; i <= 60; i++) {
        disponiveis.push(i);
    }
    
    while (cont <= quantidade) {
        let iSorteio = parseInt(Math.random() * maximo);
        numSorteio = disponiveis[iSorteio];
        sorteados.push(numSorteio);
        let indice = disponiveis.indexOf(numSorteio)
        disponiveis.splice(indice, 1);
        cont++;
        maximo--;
    }

    textoSorteio = sorteados.join(" - ");
    oSorteio.innerHTML = ("O resultado do sorteio é: " + textoSorteio);

    //Ajustar//
    const apurar = document.createElement('button');
    apurar.textContent = "Apurar";
    apurar.addEventListener ('click', apurarPremiacao);
    const adicionar = document.getElementById('botao-apurar');
    adicionar.appendChild(apurar);

}

function apurarPremiacao() {
    let apostados = [];
    let resultados = [];
    let bolinha = 0;
    let contagem = 0;
    let acertos = [];

    let osAcertos = document.querySelector('#divulgacao');
    
    let textoApostados = document.getElementById("surpresinha").textContent;
    let numerosApostados = textoApostados.split(": ")[1].trim();
    let textoSorteados = document.getElementById("result-sorteio").textContent;
    let numerosSorteados = textoSorteados.split(": ")[1].trim();

    apostados = numerosApostados.split(" - ")
    resultados = numerosSorteados.split(" - ")

    while (bolinha <= 5) {
        if (apostados.includes(resultados[bolinha])) {
            acertos.push(resultados[bolinha]);
            contagem++;
            bolinha++;
        } else {
            bolinha++;
        }
    }

    acertos.sort((a,b) => a - b);

    textoAcertos = acertos.join(" - ")
        if (contagem === 0) {
            osAcertos.innerHTML = ("Não houve acertos.")
        } else if (contagem < 4) {
            osAcertos.innerHTML = ("Houve " + contagem + " acerto(s). Número(s): " + textoAcertos )
        } else {
            osAcertos.innerHTML = ("Houve " + contagem + " acerto(s). Número(s): " + textoAcertos )
        }

    let premioSena = document.querySelector('#sena');
    let premiosQuinas = document.querySelector('#quinas');
    let premiosQuadras = document.querySelector('#quadras');

    if (contagem===6) {
        sena = 1;
        quinas = qtdeQuinas(apostados.length, contagem);
        quadras = qtdeQuadras(apostados.length, contagem);
    } else if (contagem===5) {
        quinas = qtdeQuinas(apostados.length, contagem);
        quadras = qtdeQuadras(apostados.length, contagem);
    } else if (contagem===4) {
        quadras = qtdeQuadras(apostados.length, contagem);
    }

    if (contagem < 4) {
        premioSena.innerHTML = ("Não se enquadra em faixa de premiação.")
    }

    if (sena == 1) {
        premioSena.innerHTML = ("Premiação de 1 Mega-Sena!!!!!!")
    }
    if (quinas >= 1) {
        premiosQuinas.innerHTML = ("Premiação de " + quinas + " Quina(s)!!!")
    }
    if (quadras >= 1) {
        premiosQuadras.innerHTML = ("Premiação de " + quadras + " Quadra(s)!")
    }
}

// EXERCÍCIO 6:

let jogo = []; //variável global
let slot = []; //variável global
var par = []; //variável global
var abertas = []; //variável global
let contador = 0; //variável global
let memoria = 0; //variável global

function carregarJogoMemoria() {
    let faces = [];
    let f = 1;
    valor = 1;
    let inicializador = document.getElementById('embaralhar');
    inicializador.disabled = true;

    // Itera sobre cada linha e reativa/limpa os botões
    const linhas = document.querySelectorAll(".formulario6 .linha");

    linhas.forEach((linha) => {
        const botoesini = linha.querySelectorAll("button"); // Seleciona os botões dentro da linha
        botoesini.forEach((botaoini) => {
            botaoini.disabled = false; // Reativa o botão
            botaoini.textContent = ""; // Limpa o conteúdo
        });
    });
    //FIM iteração de reinicialização

    //array com faces dos cards
    while (f <= 10) {
        faces.push(valor);
        faces.push(valor);
        valor++;
        f++;
    }
  
    let indices = [];

    //array com os índices
    for (let q = 0; q <= 19; q++) {
        indices.push(q);
    }

    let totalBtn = 20;
    let qMax = 20; 
    
    for (let i = 1; i <= totalBtn; i++) {

        let iq = parseInt(Math.random() * qMax);

        let icard = indices[iq]
        slot.push(icard);
        //console.log(jogo);

        // Constrói o seletor dinamicamente
        let seletor = `.btn${i}`;
        let botao = document.querySelector(seletor);
        botao.id = `card${icard}`;
        let face = faces[icard];
        jogo.push(face);
        //botao.textContent = face;
        indices.splice(iq, 1);
        qMax--;
    }

    console.log(jogo);
    console.log(slot);
}

function verificarIgualdade() {

    let card = event.target.id;
    let face = document.getElementById(card);
    let iSlot = slot.indexOf(parseInt(card.replace(/\D/g, '')));//obter o índice da card 1 no slot
    let carta = jogo[iSlot];
    face.textContent = carta;
    abertas.push(carta);
    par.push(card);

    //console.log(abertas);
    //console.log(par.length);
        if (par.length===2) {
            let botao1 = document.getElementById(par[0]);
            let botao2 = document.getElementById(par[1]);
            contador++;
            if (abertas[0] === abertas[1]) {
                botao1.disabled = true;
                botao2.disabled = true;
                memoria++;
            } else {
                setTimeout(() => {
                    botao1.textContent = "";
                    botao2.textContent = "";
                }, 2000);
            }
            abertas.length = 0;
            par.length = 0;
            if (memoria === 10) {
                let resultado6 = document.querySelector('#resp6');
                let inicializador = document.getElementById('embaralhar');
                resultado6.innerHTML = ("Parabéns! Você finalizou em " + contador + " jogadas!");
                jogo.length = 0;
                slot.length = 0;
                inicializador.disabled = false;

            }
        }
        console.log(contador);
        console.log(memoria);
}

// EXERCÍCIO 7:

function resolverEquacao2Grau() {
    let respequ = document.querySelector('#respequacao');
    let compincomp = document.querySelector('#completa');
    let a = document.querySelector('#coeficientea').value;
    let b = document.querySelector('#coeficienteb').value;
    let c = document.querySelector('#coeficientec').value;
    let resposta7 = document.querySelector('#resp7');
    let equacao = "";
    let completa = "";
    let parte1 = "";
    let parte2 = "";
    let parte3 = "";
    let delta;
    let discriminante;
    let x1;
    let x2;
    let x;

    //Parte1
    if (a == 1) {
        parte1 = "x² ";
    } else if (a == -1) {
        parte1 = "-x² ";
    } else {
        parte1 = a + "x² ";
    }

    //Parte2
    if (b == 0) {
        parte2 = ""; 
    } else if (b == 1) {
        parte2 = " + x "; 
    } else if (b == -1) {
        parte2 = " - x "; 
    } else if (b > 0) {
        parte2 = "+ " + b + "x ";
    } else {
        parte2 = "- " + b*(-1) + "x ";
    }

    //Parte3
    if (c == 0) {
        parte3 = ""; 
    } else if (c > 0) {
        parte3 = "+ " + c;
    } else {
        parte3 = "- " + c*(-1);
    }

    console.log(parte1);
    console.log(parte2);
    console.log(parte3);

    if (a == 0) {
        equacao = "Por definição, a não pode ser igual a zero!"
    } else {
        equacao = parte1 + parte2 + parte3 + " = 0"
    }

    if (b == 0 || c == 0) {
        completa = "incompleta";
    } else {
        completa = "completa"
    }

    delta = (b*b)-(4*a*c);

    if (delta > 0) {
        x1 = (-b+(Math.sqrt((b*b)-(4*a*c))))/(2*a);
        x2 = (-b-(Math.sqrt((b*b)-(4*a*c))))/(2*a);
        discriminante = "Há raízes reais diferentes: " + x1 + " e " + x2
    } else if (delta == 0) {
        x = (-b)/(2*a)
        discriminante = "Há raízes reais iguais: " + x
    } else {
        discriminante = "As raízes não são números reais."
    }

    respequ.innerHTML = (equacao);
    compincomp.innerHTML = ("A equação é " + completa);
    resposta7.innerHTML = (discriminante);
}

// EXERCÍCIO 8:

function fornecimentoNotas() {
    let denominacao = [];
    let qtde;
    let i = 0;
    let valorSaque = document.querySelector('#saque').value;
    let novoInputSaque = document.querySelector('#sugestoes');
    let resposta8 = document.querySelector('#resp8');
                
    let solicitado = valorSaque;
    let cedulas = [200, 100, 50, 20, 10, 5, 2]

    let estoque = cedulas.length;
    let inferior = cedulas[estoque - 1]
    let f = estoque - 1;

    console.log(estoque);
    console.log(inferior);
    console.log(f);

    while (valorSaque >= inferior) {
        while (i <= f) {
            if (valorSaque < cedulas[i]) {
                i++;
            } else {
                qtde = parseInt(valorSaque / cedulas[i]);
                resto = valorSaque % cedulas[i]
                valorSaque = resto;
                denominacao.push(qtde + " cédula(s) de R$" + cedulas[i] + ",00");
                console.log(denominacao);
                i++;
            }
        }
    }

    if (resto == 0) {
        resposta8.innerHTML = ("Serão fornecidas as seguintes notas:");
        let listanotas = document.getElementById("lista-cedulas");
        for (let ced = 0; ced < denominacao.length; ced++) {
            let cedula = document.createElement("li");
            cedula.textContent = denominacao[ced];
            listanotas.appendChild(cedula);
          }

    } else {
        novoInputSaque.innerHTML = ("Valor inadequado. Selecionar uma das sugestões abaixo:");
        let sugestao1 = solicitado - 1;
        let sugestao2 = Number(solicitado) + 1;

        const sugerido = document.getElementById('botao-sugestoes');
        //Novo Botão com valor possível inferior
        const sugerirInf = document.createElement('button');
        sugerirInf.textContent = "R$" + sugestao1 +",00";
        sugerirInf.addEventListener ('click', novoValorSaque);

        //Novo Botão com valor possível superior
        const sugerirSup = document.createElement('button');
        sugerirSup.textContent ="R$" +  sugestao2 +",00";
        sugerirSup.addEventListener ('click', novoValorSaque);

        //Adicionar Botões
        sugerido.appendChild(sugerirInf);
        sugerido.appendChild(sugerirSup);
    }
}

function novoValorSaque() {
    let novoValor = document.getElementById("saque");
    let valorescolhido =  event.target.textContent;
    novoValor.value = parseInt(valorescolhido.replace("R$", "").replace(",", "."));
    fornecimentoNotas()
}

// EXERCÍCIO 9:

function calcularCombustivel() {
    let capacidade = document.querySelector('#tanque').value;
    let destino = document.querySelector('#distancia').value;
    let precobomba = document.querySelector('#preco').value;
    let kmlitro = document.querySelector('#consumo').value;

    let resultado91 = document.querySelector('#resp9-1');
    let resultado92a = document.querySelector('#resp9-2a');
    let resultado92b = document.querySelector('#resp9-2b');
    let resultado93 = document.querySelector('#resp9-3');
    let resultado94 = document.querySelector('#resp9-4');

    let litros = destino / kmlitro;

    resultado91.innerHTML = ("Serão gastos " + litros + " litros de combustível no trajeto.");

    if (capacidade < litros) {
        parada = parseInt(litros / capacidade);
        kmparada = parseInt(capacidade * kmlitro);
        resultado92a.innerHTML = ("Será(ão) necessária(s) " + parada + " parada para abastecimento");
    } else {
        resultado92a.innerHTML = ("Não haverá necessidade de parada para abastecimento.");
    }

    if (parada == 1) {
        resultado92b.innerHTML = ("A parada deve ocorrer com " + kmparada + " km.");
    } else {
        resultado92b.innerHTML = ("As " + parada + " paradas devem ocorrem em aproximadamente " + kmparada + " km cada uma");
    }
    console.log(1 + parada);
    abastecimento = (capacidade * precobomba.replace(",", ".")) * (1 + parada);
    resultado93.innerHTML = ("Serão gastos R$ " + abastecimento + " com abastecimento.");

    abastecimentototal = (parada + 1) * capacidade;
    sobratanque = abastecimentototal - litros;
    
    resultado94.innerHTML = ("Ao final do trajeto, restarão " + sobratanque + " litros no tanque");

}

// EXERCÍCIO 10:

let lancamentos = []; //variável global
let pprincipal = []; //variável global
let guardado = []; //variável global

function jogarCraps() {
    let premio = document.getElementById('valorpremio');
    let resposta10 = document.querySelector('#resp10');
    let valorapostador = document.querySelector('#ex10').value;
    let lancador = document.getElementById('lancar');

    let dado1 = parseInt(Math.random() * 6) + 1
    let dado2 = parseInt(Math.random() * 6) + 1

    //dados
    let faceum = document.getElementById("dadoum");
    let facedois = document.getElementById("dadodois");

    faceum.src = "imagens/dado" + dado1 + ".png";
    facedois.src = "imagens/dado" + dado2 + ".png";

    let somadados = Number(dado1) + Number(dado2);

    if (pprincipal.length == 0) {
        let valorpremio = Number(valorapostador) * 2;
        premio.textContent = "R$ " + valorpremio +",00";
        pprincipal.push(valorpremio);
    }

    let fator = 0.05 * Number(pprincipal[0]);
    let qtdelances = lancamentos.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0) + 1;

    if (lancamentos.length == 0) {
        lancamentos.push(1);
        let mensagem = document.getElementById('lance' + qtdelances);
        if (somadados == 7 || somadados == 11) {
            mensagem.innerHTML = (qtdelances + ". Você tirou " + somadados + " no 1º lançamento e ganhou R$ " + pprincipal.at(-1) + ",00");
            resposta10.innerHTML = ("Jogo encerrado!");
            lancador.disabled = true;
        } else if (somadados == 2 || somadados == 3 || somadados == 12) {
            mensagem.innerHTML = (qtdelances + ". Você tirou " + somadados + " no 1º lançamento e perdeu sua aposta de R$ " + valorapostador + ",00");
            resposta10.innerHTML = ("Jogo encerrado!");
            lancador.disabled = true;
        } else {
            guardado.push(somadados);
            valorpremio = (pprincipal[0]) - (fator*qtdelances);
            premio.textContent = "R$ " + valorpremio +",00";
            mensagem.innerHTML = (qtdelances + ". Você tirou " + somadados + ", que será guardado para as próximas rodadas");
        }
    } else if (lancamentos.length <= 11) { 
        lancamentos.push(1);
        let mensagem = document.getElementById('lance' + qtdelances);
        if (somadados == 7) {
            mensagem.innerHTML = (qtdelances + ". Você tirou " + somadados + " e perdeu sua aposta de R$ " + valorapostador +",00");
            resposta10.innerHTML = ("Jogo encerrado!");
            lancador.disabled = true;
        } else if (somadados == guardado[0]) {
            mensagem.innerHTML = (qtdelances + ". Você tirou " + somadados + " e ganhou R$ " + valorpremio +",00");
            resposta10.innerHTML = ("Jogo encerrado!");
            lancador.disabled = true;
        } else {
            valorpremio = (pprincipal[0]) - (fator*qtdelances);
            premio.textContent = "R$ " + valorpremio +",00";
            mensagem.innerHTML = (qtdelances + ". Você tirou " + somadados + ". Restam " + (11 - qtdelances) + " rodadas.");
        }
    } else {
        mensagem.innerHTML = (qtdelances + ". Você não tirou o número guardado e perdeu sua aposta de R$ " + valorapostador +",00");
        lancador.disabled = true;
    }



    console.log(dado1);
    console.log(dado2);


}