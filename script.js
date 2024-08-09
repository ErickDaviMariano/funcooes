const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre uma nova tecnologia de IA aplicada na medicina que pode prever doenças com base em dados genéticos. Qual é a sua reação inicial?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você se preocupa com a privacidade e o potencial uso indevido dos dados genéticos."
            },
            {
                texto: "Isso é incrível!",
                afirmacao: "Você fica empolgado com as possibilidades de diagnósticos mais precisos e tratamentos personalizados."
            }
        ]
    },
    {
        enunciado: "Um hospital implementou um sistema de IA para monitorar pacientes em tempo real. Qual seria sua opinião sobre isso?",
        alternativas: [
            {
                texto: "Acho que é uma grande melhoria, pois pode oferecer cuidados mais rápidos e precisos.",
                afirmacao: "Você acredita que a IA pode melhorar significativamente o atendimento ao paciente e a eficiência hospitalar."
            },
            {
                texto: "Estou preocupado com o fato de que isso possa reduzir o contato humano e afetar a qualidade do atendimento.",
                afirmacao: "Sua preocupação leva você a se engajar em discussões sobre como equilibrar a tecnologia com o cuidado humano."
            }
        ]
    },
    {
        enunciado: "Em uma aula sobre IA na medicina, você deve apresentar um trabalho sobre as implicações éticas do uso de IA na saúde. Como você procede?",
        alternativas: [
            {
                texto: "Pesquiso sobre as implicações éticas e escrevo um trabalho detalhado utilizando ferramentas de IA para obter dados relevantes.",
                afirmacao: "Você utilizou a IA para obter uma visão aprofundada e criar um trabalho bem fundamentado sobre ética na saúde."
            },
            {
                texto: "Baseio meu trabalho em discussões com colegas e pesquisas tradicionais, sem usar ferramentas de IA diretamente.",
                afirmacao: "Você prefere um enfoque mais pessoal e tradicional na pesquisa, valorizando o aprendizado direto e a análise crítica."
            }
        ]
    },
    {
        enunciado: "Você tem a tarefa de criar uma apresentação sobre a eficácia dos sistemas de IA na detecção precoce de doenças. Qual ferramenta você utiliza?",
        alternativas: [
            {
                texto: "Utilizo ferramentas de apresentação tradicionais para criar gráficos e informações baseadas em pesquisas.",
                afirmacao: "Você optou por uma abordagem clássica, valorizando a clareza e a profundidade na apresentação de dados."
            },
            {
                texto: "Uso um gerador de gráficos e infográficos baseado em IA para criar uma apresentação visualmente impressionante.",
                afirmacao: "Você acelerou o processo de criação e utilizou a IA para melhorar a apresentação visual e a comunicação dos dados."
            }
        ]
    },
    {
        enunciado: "Você está trabalhando em um projeto de pesquisa sobre a aplicação de IA para melhorar o diagnóstico de doenças raras. Como você lida com a utilização da IA?",
        alternativas: [
            {
                texto: "Confio totalmente na IA para fornecer resultados e análise, sem revisar os dados manualmente.",
                afirmacao: "Você percebeu que a dependência total da IA pode levar a erros e decide revisar e validar os resultados manualmente."
            },
            {
                texto: "Utilizo a IA como uma ferramenta de suporte e sempre reviso os resultados e as recomendações fornecidas.",
                afirmacao: "Você adota uma abordagem equilibrada, reconhecendo a utilidade da IA enquanto mantém a supervisão humana crítica."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Como será o futuro da IA na medicina?";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
