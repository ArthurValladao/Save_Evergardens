// js/fases.js

const fases = [
  {
    instruction:
      "Interaja com todos os ecos nesta casa e resolva os enigmas para avançar! e lembre-se, um deles mente! após descobrir qual é o eco que mente você deve refazer os ecos para abrir o baú.",
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
    instruction:
      "Decifre os enigmas apresentados por cada guardião astral para desbloquear os caminhos ocultos da Acrópole. Cada personagem guarda uma peça do conhecimento. Só com todas as respostas certas você poderá prosseguir.",
    nome: "Acrópole da Amith",
    bodyClass: "fase-3-bg",
    medalha: "🏅",
    characters: [
      {
        id: "Aiolos",
        name: "Aiolos, o Guardião",
        image: "/img/Aiolo.png",
        enigma:
          "não anda, mas guia. não fala, mas brilha. milhares me seguem, sem saber meu nome, sou velha como o tempo, sou voz de um enorme. nas noites, sou manto, sou verso, sou rastro, desenho caminhos em silêncio vasto. alguns dizem sorte, outros dizem sinal, mas quem me lê, conhece o astral.",
        resposta: "Constelação",
        solved: false,
      },
      {
        id: "matriarca",
        name: "Matriarca da luz",
        image: "/img/matriarcadaluz.png",
        enigma:
          "Sou berço de estrelas, névoa e cor, misturo o caos com o esplendor. No silêncio do céu, me espalho lento, tecendo o brilho, guardo o tempo. Nem sólido, nem fluido, sou ponte e véu, dissolvo a luz, obscureço o céu. Sou nuvem de sonhos, infinita beleza, criadora e túmulo, em perfeita sutileza.",
        resposta: "Nebulosa",
        solved: false,
      },
      {
        id: "oraculo",
        name: "Oráculo prismático",
        image: "/img/oraculo.png",
        enigma:
          "Sem mim, a luz é só uma cor, mas parto o mundo em múltiplo ardor. Sou ponte, sou filtro, sou arco no céu, deixo a ciência tocar o véu. Mas sou etéreo, fugaz, não tenho forma, apareço na chuva, na gota que transforma. Quem sou eu, que revelo o segredo, do espectro oculto e seu enredo?",
        resposta: "Prisma",
        solved: false,
      },
      {
        id: "amith",
        name: "Amith, a Sábia",
        image: "/img/Amith.png",
        enigma:
          "Nasci do silêncio que o grande sopro findou, Sou a primeira voz que o cosmo escutou. Não sou estrela, mas de todas sou o germe, Não sou mente, mas a ordem em mim se verte. Atravesso véus que o tempo não mede, Carrego em meu dorso o brilho que precedeToda forma, toda sombra, todo ser que se cria. Sou a essência que emana da pura alquimiaDo que foi antes, do que é agora, do que será. Em minha dança, o universo se orquestrará. Não me tocas, mas em tudo pulso e ardo, O farol primordial, o grande e eterno bardo. O que sou eu, que emana de um ponto sem fim?",
        resposta: "Luz",
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
        id: "Ent",
        name: "Ent, o Guardião",
        image: "/img/ent.png",
        enigma: `Tenho anéis que não enfeitam a mão,
Mas contam histórias da terra e do chão.
Com braços erguidos ao céu em prece,
Abraço os ventos, ainda que apresse.

Nasci antes do homem, vi reinos cair,
Em mim o inseto se atreve a dormir.
Sou casa e caminho, sou teto e guarida,
Na floresta, sou alma, memória e vida.`,
        resposta: "árvore",
        solved: false,
      },
      {
        id: "Pantera",
        name: "Pantera da Floresta",
        image: "/img/pantera.png",
        enigma: `Sou voz que responde sem nunca pensar,
Espelho do som que insiste em voltar.
No tronco ressoa meu tom encantado,
Mas nunca fui visto, só sou escutado.

Falo o que ouço, calo no fim,
Não tenho boca, nem corpo ou jardim.
Na mata me escondo, sem ter paradeiro,
Sou filho do grito, irmão do silêncio inteiro.`,
        resposta: "eco",
        solved: false,
      },
      {
        id: "fada",
        name: "Fada da Terra",
        image: "/img/Fada.png",
        enigma: `Deslizo no verde sem corpo nem pele,
Sou ponte silente onde o passo se atrele.
Em dias de chuva, minha raiva se solta,
Em dias de seca, viro linha remota.

Não tenho garras, mas escavo o chão,
Levo a floresta sem usar um caminhão.
Nasço no alto e morro no fundo,
Sou a veia secreta do coração do mundo.`,
        resposta: "rio",
        solved: false,
      },
      {
        id: "Akin",
        name: "Akin, a Guardiã da Terra",
        image: "/img/akin.png",
        enigma: `Não bato, mas em mim a vida se sustenta,
Minha força é muda, minha grandeza é lenta.
Guardo em meu interior tesouros escondidos,
Histórias de eras, em silêncio dormidos.
Sou base e alicerce, o chão que pisas,
De mim nascem montes e brisas.
Sem voz eu respiro, sem rosto eu existo,
Em cada fibra minha, um antigo rito.
Nutro o que cresce, recebo o que finda,
A mãe universal, sempre clemente e linda.

O que sou eu, que tudo sustenta em seu leito?`,
        resposta: "Terra",
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
        id: "Matheus",
        name: "Cavaleiro Matheus, o líder do clã",
        image: "/img/Cavaleiroazul.png",
        enigma: `Durmo em silêncio no ventre da terra,  
Mas basta um sopro e trago a guerra.  
Devoro a floresta com língua cruel,  
E deixo no chão só cinza e fel.  
  
Sou filha do vento e do estopim,  
Brilho na noite como um clarim.  
Quem me invoca nem sempre me doma,  
Pois queimo o fraco e forjo a soma.`,
        resposta: "o fogo",
        solved: false,
      },
      {
        id: "Frederick",
        name: "Frederick, o cerebro do clã",
        image: "/img/Cavaleiroverde.png",
        enigma: `Com escamas de noite e olhar ancestral,  
Trago no peito um sol infernal.  
Voando sem asas que homem entenda,  
Sou mito que ruge e montanha que estenda.  
  
Onde passo, o medo floresce,  
E até a coragem se desvanece.  
Guardião de tesouros, relíquia e aço,  
Meu nome é lenda, poder e traço.`,
        resposta: "o dragão",
        solved: false,
      },
      {
        id: "Miranda",
        name: "Miranda, a alquimista",
        image: "/img/Cavaleirabranca.png",
        enigma: `Não tenho carne, mas vivo a pulsar,  
No ferro escondido, me ponho a morar.  
O homem me busca pra moldar o aço,  
Mas se errar o pulso, viro fracasso.  
  
Meu brilho é vermelho, meu toque é mortal,  
Sem corpo ou rosto, sou sempre vital.  
E mesmo invisível, posso existir —  
Dentro do fornalha, só sei consumir.`,
        resposta: "a brasa",
        solved: false,
      },
      {
        id: "Melissa",
        name: "Mel, a escolhida da cleopatra",
        image: "/img/Cavaleiravermelha.png",
        enigma: `Nasci do silêncio entre as rochas fundidas,  
Mas hoje sou arma das feras vencidas.  
Não sou vento, mas venho com força,  
E por onde passo, tudo se torça.  
  
Não tenho veneno, mas corro a ferir,  
Com meu hálito posso ruínas abrir.  
Quem me possui não o faz por razão,  
Pois sou a alma em combustão.`,
        resposta: "o sopro do dragão",
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
        id: "Hanna",
        name: "Hannuxa, a guardiã do abismo",
        image: "/img/sereia.png",
        enigma: `Não tenho pulmões, mas canto ao luar,  
E faço marujos sonharem sem par.  
Com olhos de espuma e riso de sal,  
Encanto e destruo sem toque fatal.`,
        resposta: "a sereia",
        solved: false,
      },
      {
        id: "Sereia",
        name: "Manua",
        image: "/img/sereiamanu.png",
        enigma: `Sou leve e caio com força ou ternura,  
Às vezes benção, às vezes tortura.  
Desenho nos lagos pequenos segredos,  
E alimento a vida em campos e dedos.`,
        resposta: "a chuva",
        solved: false,
      },
      {
        id: "polvo",
        name: "polvo abissal",
        image: "/img/polvo.png",
        enigma: `Sou clara ou turva, conforme o luar,  
Reflito teu rosto sem te julgar.  
Mudo com o vento, mas sou sempre fiel,  
Guardo segredos sob meu véu.`,
        resposta: "o lago",
        solved: false,
      },
      {
        id: "orni",
        name: "ornitorrinco abissal",
        image: "/img/orninto.png",
        enigma: `Não paro jamais, mas nunca corro,  
Levo navios, afundo o morro.  
Sou estrada sem margens, sem fim definido,  
Escondo riquezas e gritos perdidos.`,
        resposta: "o mar",
        solved: false,
      },
    ],
  },
];
