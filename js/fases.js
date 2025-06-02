// js/fases.js

const fases = [
  {
    instruction:
      "Interaja com todos os ecos nesta casa e resolva os enigmas para avançar! e lembre-se, um deles mente!",
    id: "casa", // ID único para a fase
    nome: "Casa do Alex",
    bodyClass: "fase-0-bg", // Classe de fundo para o #game
    medalha: "🥇", // Medalha para a fase
    characters: [
      {
        id: "Eco1",
        name: "Primeiro Eco",
        image: "/img/Eco1.png", // Imagem do personagem
        enigma:
          "O primeiro número é o mesmo que o número de letras da palavra 'one' multiplicado pelo número de lados de um triângulo.",
        resposta: "9",
        solved: false,
      },
      {
        id: "Eco2",
        name: "Segundo Eco",
        image: "/img/Eco2.png",
        enigma:
          " O segundo número é a soma entre o primeiro e o número de vértices de um cubo.",
        resposta: "17",
        solved: false,
      },
      {
        id: "Eco3",
        name: "Terceiro Eco",
        image: "/img/Eco3.png",
        enigma:
          "O terceiro número é igual a diferença entre o segundo e o número de patas de uma aranha.",
        resposta: "9",
        solved: false,
      },
      {
        id: "eco4",
        name: "Quarto Eco",
        image: "/img/Eco4.png",
        enigma:
          " O quarto número é o número primo mais próximo (e menor) da soma dos três primeiros.",
        resposta: "31",
        solved: false,
      },
      {
        id: "Bau",
        name: "Ramses",
        image: "/img/Bau.png",
        enigma: "Um dos ecos mente, qual a senha para abrir o baú?",
        resposta: "807",
        solved: false,
      },
    ],
  },
  {
    instruction:
      "Explore as cartas espalhadas pela ilha e descubra as respostas nos versos poéticos e siga a sabedoria dos ventos.",
    id: "ilha",
    nome: "Ilha Púrpura de Ícaro",
    bodyClass: "fase-1-bg",
    medalha: "🥈-",
    characters: [
      {
        id: "carta1",
        name: "Primeira Carta",
        image: "/img/Carta 1.png",
        enigma: `O desafio que vou cantar,
conta sobre sete dias sem parar.
sete estrelas para observar,
sete luas pra admirar.
se sonhas com o ar,
viste a luz que está a guiar.
venha me encontrar,
vamos cantar e celebrar.
venha comigo se encantar,
já que tive que me dedicar
para, nesse tom, rimar!
para te lembrar
que o mais importante é a leveza
do ar!`,
        resposta: "Farol",
        solved: false,
      },
      {
        id: "carta2",
        name: "Segunda Carta",
        image: "/img/Carta 2.png",
        enigma: `se pudesse te dizer o que penso,
cantaria sobre o vento,
sobre o amor roubado pelo tempo,
sobre as asas de alguém que já nem
lembra —
mas como não poderia,
te deixo uma história antiga.
será você capaz de desvendar aquela peça,
para a memória física?
sinto informar que ela foi roubada.
que terás que encontrá-la.
talvez haja um mapa,
sinto não estar lá,
para a ilha que o farol há de iluminar,
nada sem parar.
visite contos, visite um lar,
mas não se esqueça (nem de olhar).
perceba atentamente este lugar,
e lembre-se que o mais importante —
para o que faltar,
com toda certeza sempre virá do ar.`,
        resposta: "Mapa",
        solved: false,
      },
      {
        id: "carta3",
        name: "Terceira Carta",
        image: "/img/Carta 3.png",
        enigma: `se as penas já possui,
perceba como a carruagem flui.
mas não uma qualquer,
uma de ferro, que todo homem quer.
se sua energia persiste,
é porque há uma fonte.
portas brancas haverão.
e buscar pelas ruas,
terá que procurar pela região.
sete estrelas, sete luas,
sete dias, sete de montões!`,
        resposta: "Carro",
        solved: false,
      },
      {
        id: "icarus",
        name: "Ícaro",
        image: "/img/Icaro.png",
        enigma: `Não se pode ver, mas se pode sentir,  
dança nas folhas, faz o som existir.  
Está em todo lugar, sem se revelar,  
e mesmo invisível, faz tudo respirar.  
  
Sopra os ventos, levanta o mar,  
entra em teus pulmões sem se apresentar.  
Sem ele, não podes continuar,  
diz então, o que é sem se mostrar?`,
        resposta: "Ar",
        solved: false,
      },
    ],
  },
  {
    instruction:
      "Leia os versos das lápides e decifre os sentimentos que ecoam entre os mortos. Somente quem entende a dor pode avançar.",
    id: "cemiterio",
    nome: "Cemitério de Melissandre",
    bodyClass: "fase-2-bg",
    medalha: "🥉",
    characters: [
      {
        id: "lapide",
        name: "Primeira Lápide",
        image: "/img/Lapide.png",
        enigma: `Com passos lentos, em solene cortejo,
As almas se unem num último ensejo.
Vestes escuras, rostos molhados de pranto,
Ecoa um lamento, um desolado canto.
Flores sem cor, em leito de despedida,
A terra se abre para uma vida finda.
Palavras vazias, consolo que falha,
Enquanto a chama da existência se atrapalha.
O cheiro de terra úmida, o silêncio que oprime,
A derradeira morada, onde a alma se exprime.
Um adeus sussurrado, um laço rompido,
No pó que retorna, um ciclo cumprido.

Que solene passagem, a humanidade celebra em dor?`,
        resposta: "Funeral",
        solved: false,
      },
      {
        id: "lapide2",
        name: "Segunda Lápide",
        image: "/img/Lapide.png",
        enigma: `Sou um livro sem páginas, mas com mil histórias,
Escritas em lágrimas, cheias de glórias.
Não tenho cheiro, mas trago o aroma de quem se foi,
Um fardo pesado, que a alma constrói.
No peito apertado, moro e habito,
Um eco distante, um som proibido.
Às vezes doce, outras vezes amarga,
A ferida aberta que o tempo não larga.
Sou o que resta, quando tudo se desfaz,
A voz que murmura, em silêncio e em paz.

O que sou eu, esse peso que o coração abriga?`,
        resposta: "Memória",
        solved: false,
      },
      {
        id: "Lapide3",
        name: "Terceiro Lápide",
        image: "/img/Lapide.png",
        enigma: `No vazio que deixaste, uma melodia paira, 
Um cântico triste, que o vento desvaira. 
Não sou sombra, mas preencho o espaço que outrora 
Transbordava de ti, e agora chora. 
Sou a pontada que aperta, um nó que não se desfaz, 
A lembrança vívida de tudo que se jaz. 
Em cada recanto, respiro teu ar que não mais flui, 
Em cada suspiro, a ausência me possui. 
Sou o peso no peito, a lágrima que escorre, 
A vela acesa que em pranto se consome. 
Não me tocas, mas sou toque constante, 
De um passado que insiste, eterno e distante.

Que sentimento sou eu, que tece a teia da dor?`,
        resposta: "Saudade",
        solved: false,
      },
      {
        id: "Dama",
        name: "Dama de vermelho",
        image: "/img/Dama.png",
        enigma: `Não tenho forma, mas transformo o que é visto, 
Em pó e silêncio, num leito previsto. 
Sou o véu que desce, a noite sem estrelas, 
O fim da jornada, as últimas querelas. 
O corpo que outrora vibrava e sentia, 
Agora repousa em gélida apatia. 
O sopro que anima, se esvai no vazio, 
Deixando para trás um eterno calafrio. 
Não sou inimiga, mas encontro final, 
A paz derradeira, o sono imortal. 
Em meu abraço, a vida se esvai sem alarde, 
E o tempo, por um instante, parece que arde. 
Sem som, sem cor, apenas o grande nada, 
A fronteira que toda alma tem que ter cruzada.

O que sou eu, o grande e derradeiro fim?`,
        resposta: "Morte",
        solved: false,
      },
    ],
  },
  {
    id: "acropole",
    nome: "Acrópole da Amith",
    bodyClass: "fase-3-bg",
    medalha: "🏅",
    characters: [
      {
        id: "amith",
        name: "Amith, a Sábia",
        image: "img/personagem13.png",
        enigma:
          "Qual é o único número que, quando você tira metade dele, ele ainda continua o mesmo?",
        resposta: "o número 8",
        solved: false,
      },
      {
        id: "guerreiro",
        name: "Guerreiro Antigo",
        image: "img/personagem14.png",
        enigma: "O que é, o que é: De dia tem 4 pés e de noite tem 6?",
        resposta: "a cama",
        solved: false,
      },
      {
        id: "oraculo",
        name: "Oráculo Silencioso",
        image: "img/personagem15.png",
        enigma: "O que é, o que é: Voa sem ter asas e chora sem ter olhos?",
        resposta: "a nuvem",
        solved: false,
      },
      {
        id: "grifo",
        name: "Grifo da Montanha",
        image: "img/personagem16.png",
        enigma: "O que é, o que é: Quanto mais se perde, mais se tem?",
        resposta: "o sono",
        solved: false,
      },
    ],
  },
  {
    id: "floresta",
    nome: "Floresta de Akin",
    bodyClass: "fase-4-bg",
    medalha: "🎖️",
    characters: [
      {
        id: "akin",
        name: "Akin, o Guardião",
        image: "img/personagem17.png",
        enigma: "Você me vê no começo da noite e no fim da manhã. O que sou?",
        resposta: "a letra n",
        solved: false,
      },
      {
        id: "elfo",
        name: "Elfo da Floresta",
        image: "img/personagem18.png",
        enigma: "O que é, o que é: Pode-se quebrar falando?",
        resposta: "o segredo",
        solved: false,
      },
      {
        id: "drago",
        name: "Dragão Pequeno",
        image: "img/personagem19.png",
        enigma:
          "O que é, o que é: Anda sem ter pés, e tem um chapéu que não é de sol?",
        resposta: "o cogumelo",
        solved: false,
      },
      {
        id: "fauno",
        name: "Fauno Misterioso",
        image: "img/personagem20.png",
        enigma:
          "O que é, o que é: Tem pescoço e não tem cabeça, tem braços e não tem mãos?",
        resposta: "a camisa",
        solved: false,
      },
    ],
  },
  {
    id: "vulcao",
    nome: "Vulcão de Ossiferno",
    bodyClass: "fase-5-bg",
    medalha: "🏵️",
    characters: [
      {
        id: "ossiferno",
        name: "Ossiferno, o Demônio",
        image: "img/personagem21.png",
        enigma:
          "Tenho um pescoço mas não tenho cabeça, e uso dois braços mas não tenho mãos. O que sou?",
        resposta: "uma camisa",
        solved: false,
      },
      {
        id: "golem",
        name: "Golem de Pedra",
        image: "img/personagem22.png",
        enigma: "O que é, o que é: Tem casa, mas mora fora dela?",
        resposta: "o caracol",
        solved: false,
      },
      {
        id: "salamandra",
        name: "Salamandra Ígnea",
        image: "img/personagem23.png",
        enigma: "O que é, o que é: Tem bacha, mas não tem boca?",
        resposta: "a chaleira",
        solved: false,
      },
      {
        id: "furia",
        name: "Fúria Elemental",
        image: "img/personagem24.png",
        enigma:
          "O que é, o que é: Se você me tem, quer me dividir; se me divide, não me tem mais?",
        resposta: "o segredo",
        solved: false,
      },
    ],
  },
  {
    id: "abismo",
    nome: "Abismo de Ningyo",
    bodyClass: "fase-6-bg",
    medalha: "🏅",
    characters: [
      {
        id: "ningyo",
        name: "Ningyo, a Guardiã",
        image: "img/personagem25.png",
        enigma: "Quanto mais você compartilha, mais você tem. O que é?",
        resposta: "conhecimento",
        solved: false,
      },
      {
        id: "leviathan",
        name: "Leviathan Profundo",
        image: "img/personagem26.png",
        enigma: "O que é, o que é: Tem linha, mas não costura?",
        resposta: "o anzol",
        solved: false,
      },
      {
        id: "polvo",
        name: "Polvo Gigante",
        image: "img/personagem27.png",
        enigma: "O que é, o que é: Está sempre no meio do caminho?",
        resposta: "a letra h",
        solved: false,
      },
      {
        id: "peixe",
        name: "Peixe Abissal",
        image: "img/personagem28.png",
        enigma: "O que é, o que é: Entra na água e não se molha?",
        resposta: "a sombra",
        solved: false,
      },
    ],
  },
  {
    id: "final",
    nome: "Aterum Final",
    bodyClass: "fase-7-bg", // Classe de fundo para o boss
    medalha: "🏆", // Medalha final, ou apenas mensagem de vitória
    isBossFase: true, // Nova flag para indicar fase de boss
    dialogo: "Chegaram longe... mas não vencerão!",
    opcoes: [
      // Opções de diálogo para o boss (do seu código original)
      { texto: "Lutamos com a verdade!", correta: false },
      { texto: "Temos os resgatados do nosso lado!", correta: true },
    ],
  },
];
