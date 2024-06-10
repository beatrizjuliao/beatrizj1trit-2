const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Atualmente, quantos elementos químicos a tabela periódica possui?",
        alternativas: [
            {
                texto: "108",
                afirmacao: "afirmacao"
            },
            {
                texto: "118",
                afirmacao: "afirmacao"
            }           
            
        ]
    },
    {
        enunciado: "Quais os principais autores do Barroco no Brasil?",
        alternativas: [
            {
                texto:"Gregório de Matos, Bento Teixeira e Manuel Botelho de Oliveira",
                afirmacao:"afirmacao"
            },
            {
                texto: "Miguel de Cervantes, Gregório de Matos e Danthe Alighieri",
                afirmacao:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Verdadeiro ou falso: O Dia das Bruxas teve origem como um antigo festival irlandês. Verdadeiro",
        alternativas: [
            {
                texto:"Verdadeiro ",
                afirmacao:"afirmacao"
            },
            {
                texto:"falso",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: "Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?",
        alternativas: [
            {
                texto:" Tem entre 2 a 4 litros. São retirados 450 mililitros",
                afirmacao:"afirmacao"
            },
            {
                texto:"Tem entre 4 a 6 litros. São retirados 450 mililitros",
                afirmacao:"afirmacao"
            }
            
        ]
    },
    {
        enunciado: " Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao:"afirmacao"
            },
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao:"afirmacao"
            }
            
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
