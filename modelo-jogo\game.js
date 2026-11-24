/*
 * CONEXÕES DE MUNDO
 * Jogo educacional de Inglês e Espanhol com tema de viagem.
 */
(function () {
  "use strict";

  // Configurações gerais do jogo
  var CONFIG = {
    totalRodadas: 10,
    vidasIniciais: 3,
    nomeJogo: "conexoes-de-mundo",
  };

  // Banco de perguntas dividido por nível de dificuldade (10 de inglês e 10 de espanhol por nível)
  var PERGUNTAS = {
    facil: [
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Yo",
        depois: "agua fría.",
        dica: 'Tradução: "Eu bebo água gelada."',
        opcoes: ["bebo", "drink", "como"],
        correta: "bebo",
        explicacao: 'Em espanhol, "bebo" significa "eu bebo" (do verbo beber). México fala espanhol.',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "I",
        depois: "a red bus in London.",
        dica: 'Tradução: "Eu vejo um ônibus vermelho em Londres."',
        opcoes: ["see", "veo", "eat"],
        correta: "see",
        explicacao: 'Em inglês, "see" é o verbo "ver". Na Inglaterra se fala inglês.',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Nosotros",
        depois: "pan en el desayuno.",
        dica: 'Tradução: "Nós comemos pão no café da manhã."',
        opcoes: ["comemos", "eat", "bebemos"],
        correta: "comemos",
        explicacao: 'Em espanhol, "comemos" é o verbo "comer" para nós (nosotros).',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "She has a big",
        depois: "for the trip.",
        dica: 'Tradução: "Ela tem uma mala grande para a viagem."',
        opcoes: ["bag", "maleta", "book"],
        correta: "bag",
        explicacao: 'Em inglês, "bag" significa bolsa ou mala de viagem.',
      },
      {
        pais: "Argentina",
        bandeira: "🇦🇷",
        idioma: "espanhol",
        antes: "El",
        depois: "sale a las ocho.",
        dica: 'Tradução: "O trem sai às oito horas."',
        opcoes: ["tren", "train", "coche"],
        correta: "tren",
        explicacao: 'Em espanhol, "tren" significa trem (meio de transporte).',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "They",
        depois: "happy in Toronto.",
        dica: 'Tradução: "Eles estão felizes em Toronto."',
        opcoes: ["are", "is", "están"],
        correta: "are",
        explicacao: 'Com "They" (eles), usamos o verbo to be "are" em inglês.',
      },
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Tú",
        depois: "español muy bien.",
        dica: 'Tradução: "Você fala espanhol muito bem."',
        opcoes: ["hablas", "speak", "lees"],
        correta: "hablas",
        explicacao: 'Em espanhol, "hablas" vem do verbo "hablar" (falar) para "tú".',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "We",
        depois: "to the museum today.",
        dica: 'Tradução: "Nós vamos ao museu hoje."',
        opcoes: ["go", "vamos", "sleep"],
        correta: "go",
        explicacao: 'Em inglês, "go" significa "ir".',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "La",
        depois: "de Madrid es bonita.",
        dica: 'Tradução: "A cidade de Madri é bonita."',
        opcoes: ["ciudad", "city", "playa"],
        correta: "ciudad",
        explicacao: 'Em espanhol, "ciudad" significa cidade.',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "He",
        depois: "orange juice every morning.",
        dica: 'Tradução: "Ele bebe suco de laranja toda manhã."',
        opcoes: ["drinks", "bebe", "writes"],
        correta: "drinks",
        explicacao: 'Em inglês, com "He" (ele), o verbo "drink" ganha um "s": "drinks".',
      },
      {
        pais: "Chile",
        bandeira: "🇨🇱",
        idioma: "espanhol",
        antes: "Me gusta",
        depois: "en el parque.",
        dica: 'Tradução: "Eu gosto de caminhar no parque."',
        opcoes: ["caminar", "walk", "dormir"],
        correta: "caminar",
        explicacao: 'Em espanhol, "caminar" significa caminhar ou andar a pé.',
      },
      {
        pais: "Austrália",
        bandeira: "🇦🇺",
        idioma: "ingles",
        antes: "The",
        depois: "is blue and warm.",
        dica: 'Tradução: "O mar é azul e quentinho."',
        opcoes: ["sea", "mar", "sun"],
        correta: "sea",
        explicacao: 'Em inglês, "sea" significa mar.',
      },
      {
        pais: "Peru",
        bandeira: "🇵🇪",
        idioma: "espanhol",
        antes: "Ellos",
        depois: "un libro de historia.",
        dica: 'Tradução: "Eles leem um livro de história."',
        opcoes: ["leen", "read", "escriben"],
        correta: "leen",
        explicacao: 'Em espanhol, "leen" vem do verbo "leer" (ler).',
      },
      {
        pais: "Irlanda",
        bandeira: "🇮🇪",
        idioma: "ingles",
        antes: "I",
        depois: "my new green jacket.",
        dica: 'Tradução: "Eu visto minha jaqueta verde nova."',
        opcoes: ["wear", "visto", "eat"],
        correta: "wear",
        explicacao: 'Em inglês, "wear" é o verbo usar/vestir roupas.',
      },
      {
        pais: "Colômbia",
        bandeira: "🇨🇴",
        idioma: "espanhol",
        antes: "Mi",
        depois: "viaja conmigo.",
        dica: 'Tradução: "Minha amiga viaja comigo."',
        opcoes: ["amiga", "friend", "perro"],
        correta: "amiga",
        explicacao: 'Em espanhol, "amiga" se escreve igual ao português.',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "Look at the",
        depois: "in the sky!",
        dica: 'Tradução: "Olhe para as estrelas no céu!"',
        opcoes: ["stars", "estrellas", "trees"],
        correta: "stars",
        explicacao: 'Em inglês, "stars" significa estrelas.',
      },
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Hoy hace mucho",
        depois: "en la playa.",
        dica: 'Tradução: "Hoje faz muito sol na praia."',
        opcoes: ["sol", "sun", "frío"],
        correta: "sol",
        explicacao: 'Em espanhol, "sol" significa sol.',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "You",
        depois: "very fast!",
        dica: 'Tradução: "Você corre muito rápido!"',
        opcoes: ["run", "corres", "sit"],
        correta: "run",
        explicacao: 'Em inglês, "run" é o verbo correr.',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Abro la",
        depois: "del hotel.",
        dica: 'Tradução: "Eu abro a porta do hotel."',
        opcoes: ["puerta", "door", "ventana"],
        correta: "puerta",
        explicacao: 'Em espanhol, "puerta" significa porta.',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "We",
        depois: "music on the plane.",
        dica: 'Tradução: "Nós ouvimos música no avião."',
        opcoes: ["listen to", "escuchamos", "look"],
        correta: "listen to",
        explicacao: 'Em inglês, "listen to" significa ouvir/escutar.',
      },
    ],

    medio: [
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Yo",
        depois: "un boleto de avión.",
        dica: 'Tradução: "Eu compro uma passagem de avião."',
        opcoes: ["compro", "buy", "vendo"],
        correta: "compro",
        explicacao: 'Em espanhol, "compro" (verbo comprar) e "boleto" (passagem) são muito usados em viagens.',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "She",
        depois: "her passport at the hotel.",
        dica: 'Tradução: "Ela mostra o passaporte dela no hotel."',
        opcoes: ["shows", "muestra", "eats"],
        correta: "shows",
        explicacao: 'Em inglês, "shows" significa "mostra" (verbo to show na 3ª pessoa).',
      },
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Nosotros",
        depois: "en un hotel cerca de la playa.",
        dica: 'Tradução: "Nós dormimos em um hotel perto da praia."',
        opcoes: ["dormimos", "sleep", "corremos"],
        correta: "dormimos",
        explicacao: 'Em espanhol, "dormimos" significa "dormimos" (verbo dormir).',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "We need a",
        depois: "to find the station.",
        dica: 'Tradução: "Nós precisamos de um mapa para achar a estação."',
        opcoes: ["map", "mapa", "ticket"],
        correta: "map",
        explicacao: 'Em inglês, mapa se escreve "map" (sem a letra "a" no final).',
      },
      {
        pais: "Argentina",
        bandeira: "🇦🇷",
        idioma: "espanhol",
        antes: "¿Dónde",
        depois: "la estación de autobús?",
        dica: 'Tradução: "Onde fica a estação de ônibus?"',
        opcoes: ["está", "is", "son"],
        correta: "está",
        explicacao: 'Para localização em espanhol, usamos sempre o verbo "estar" ("está").',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "They",
        depois: "many photos during the tour.",
        dica: 'Tradução: "Eles tiram muitas fotos durante o passeio."',
        opcoes: ["take", "toman", "read"],
        correta: "take",
        explicacao: 'Em inglês, a expressão para tirar fotos é "take photos".',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Los turistas",
        depois: "la comida típica.",
        dica: 'Tradução: "Os turistas provam a comida típica."',
        opcoes: ["prueban", "taste", "beben"],
        correta: "prueban",
        explicacao: 'Em espanhol, "prueban" vem do verbo "probar" (provar/experimentar).',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "The",
        depois: "leaves at nine o'clock.",
        dica: 'Tradução: "O avião parte às nove horas."',
        opcoes: ["plane", "avión", "street"],
        correta: "plane",
        explicacao: 'Em inglês, "plane" (ou airplane) significa avião.',
      },
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Ella",
        depois: "recuerdos para su familia.",
        dica: 'Tradução: "Ela traz lembrancinhas para a família dela."',
        opcoes: ["trae", "brings", "lleva"],
        correta: "trae",
        explicacao: 'Em espanhol, "trae" vem do verbo "traer" (trazer).',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "I always",
        depois: "my backpack before flying.",
        dica: 'Tradução: "Eu sempre arrumo minha mochila antes de voar."',
        opcoes: ["pack", "empaco", "open"],
        correta: "pack",
        explicacao: 'Em inglês, "pack" significa arrumar as malas ou a mochila.',
      },
      {
        pais: "Chile",
        bandeira: "🇨🇱",
        idioma: "espanhol",
        antes: "Ustedes",
        depois: "muy temprano al aeropuerto.",
        dica: 'Tradução: "Vocês chegam muito cedo ao aeroporto."',
        opcoes: ["llegan", "arrive", "salen"],
        correta: "llegan",
        explicacao: 'Em espanhol, "llegan" vem do verbo "llegar" (chegar).',
      },
      {
        pais: "Austrália",
        bandeira: "🇦🇺",
        idioma: "ingles",
        antes: "He",
        depois: "postcards to his friends.",
        dica: 'Tradução: "Ele envia cartões-postais para os amigos dele."',
        opcoes: ["sends", "envía", "buys"],
        correta: "sends",
        explicacao: 'Em inglês, "sends" vem do verbo "send" (enviar).',
      },
      {
        pais: "Peru",
        bandeira: "🇵🇪",
        idioma: "espanhol",
        antes: "Quiero",
        depois: "el museo nacional.",
        dica: 'Tradução: "Eu quero conhecer o museu nacional."',
        opcoes: ["conocer", "meet", "cerrar"],
        correta: "conocer",
        explicacao: 'Em espanhol, "conocer" significa conhecer um lugar ou pessoa.',
      },
      {
        pais: "Irlanda",
        bandeira: "🇮🇪",
        idioma: "ingles",
        antes: "Can you",
        depois: "the window, please?",
        dica: 'Tradução: "Você pode abrir a janela, por favor?"',
        opcoes: ["open", "abrir", "close"],
        correta: "open",
        explicacao: 'Em inglês, "open" significa abrir.',
      },
      {
        pais: "Colômbia",
        bandeira: "🇨🇴",
        idioma: "espanhol",
        antes: "El",
        depois: "está en el segundo piso.",
        dica: 'Tradução: "O quarto fica no segundo andar."',
        opcoes: ["cuarto", "room", "baño"],
        correta: "cuarto",
        explicacao: 'Em espanhol, "cuarto" (ou habitación) significa quarto.',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "We are",
        depois: "for the taxi outside.",
        dica: 'Tradução: "Nós estamos esperando o táxi lá fora."',
        opcoes: ["waiting", "esperando", "running"],
        correta: "waiting",
        explicacao: 'Em inglês, "waiting" significa esperando.',
      },
      {
        pais: "Argentina",
        bandeira: "🇦🇷",
        idioma: "espanhol",
        antes: "Siempre",
        depois: "mi cámara en la mochila.",
        dica: 'Tradução: "Eu sempre guardo minha câmera na mochila."',
        opcoes: ["guardo", "keep", "pierdo"],
        correta: "guardo",
        explicacao: 'Em espanhol, "guardo" vem do verbo "guardar".',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "The bridge",
        depois: "the river in the city.",
        dica: 'Tradução: "A ponte atravessa o rio na cidade."',
        opcoes: ["crosses", "cruza", "stops"],
        correta: "crosses",
        explicacao: 'Em inglês, "crosses" vem do verbo "cross" (atravessar).',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Necesitamos",
        depois: "las entradas antes.",
        dica: 'Tradução: "Nós precisamos reservar os ingressos antes."',
        opcoes: ["reservar", "book", "pagar"],
        correta: "reservar",
        explicacao: 'Em espanhol, "reservar" significa fazer uma reserva.',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "She",
        depois: "two languages very well.",
        dica: 'Tradução: "Ela fala dois idiomas muito bem."',
        opcoes: ["speaks", "habla", "writes"],
        correta: "speaks",
        explicacao: 'Em inglês, "speaks" significa fala (verbo speak para she).',
      },
    ],

    dificil: [
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "Yesterday we",
        depois: "an old castle in England.",
        dica: 'Tradução: "Ontem nós visitamos um castelo antigo na Inglaterra."',
        opcoes: ["visited", "visitamos", "visit"],
        correta: "visited",
        explicacao: 'A palavra "Yesterday" (ontem) indica passado, por isso usamos "visited".',
      },
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Ayer nosotros",
        depois: "las pirámides antiguas.",
        dica: 'Tradução: "Ontem nós conhecemos as pirâmides antigas."',
        opcoes: ["conocimos", "knew", "conocemos"],
        correta: "conocimos",
        explicacao: '"Ayer" (ontem) pede o verbo no passado: "conocimos" (conhecemos).',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "The flight was",
        depois: "because of the rain.",
        dica: 'Tradução: "O voo foi atrasado por causa da chuva."',
        opcoes: ["delayed", "retrasado", "fast"],
        correta: "delayed",
        explicacao: 'Nos aeroportos em inglês, "delayed" significa atrasado.',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Necesito cambiar",
        depois: "en el banco.",
        dica: 'Tradução: "Preciso trocar dinheiro no banco."',
        opcoes: ["dinero", "money", "maleta"],
        correta: "dinero",
        explicacao: 'Em espanhol, "dinero" significa dinheiro.',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "Passengers must show their",
        depois: "pass.",
        dica: 'Tradução: "Os passageiros devem mostrar seu cartão de embarque."',
        opcoes: ["boarding", "embarque", "driving"],
        correta: "boarding",
        explicacao: '"Boarding pass" é o termo em inglês para cartão de embarque.',
      },
      {
        pais: "Argentina",
        bandeira: "🇦🇷",
        idioma: "espanhol",
        antes: "Mañana",
        depois: "en barco por el río.",
        dica: 'Tradução: "Amanhã viajaremos de barco pelo rio."',
        opcoes: ["viajaremos", "travel", "viajamos"],
        correta: "viajaremos",
        explicacao: '"Mañana" (amanhã) indica futuro: "viajaremos" em espanhol.',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "Could you",
        depois: "me the way to the subway?",
        dica: 'Tradução: "Você poderia me dizer o caminho para o metrô?"',
        opcoes: ["tell", "decir", "speak"],
        correta: "tell",
        explicacao: 'Em inglês, usamos "tell me" para pedir que alguém nos diga uma informação.',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "El",
        depois: "nos explicó la historia del museo.",
        dica: 'Tradução: "O guia nos explicou a história do museu."',
        opcoes: ["guía", "guide", "piloto"],
        correta: "guía",
        explicacao: 'Em espanhol, "el guía" (com acento no í) é o guia turístico.',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "She",
        depois: "her luggage at the airport.",
        dica: 'Tradução: "Ela perdeu a bagagem dela no aeroporto."',
        opcoes: ["lost", "perdió", "found"],
        correta: "lost",
        explicacao: '"Lost" é o passado do verbo "lose" (perder) em inglês.',
      },
      {
        pais: "México",
        bandeira: "🇲🇽",
        idioma: "espanhol",
        antes: "Disfrutamos mucho",
        depois: "por otros países.",
        dica: 'Tradução: "Nós aproveitamos muito viajar por outros países."',
        opcoes: ["viajar", "traveling", "caminar"],
        correta: "viajar",
        explicacao: 'Em espanhol, o verbo no infinitivo "viajar" completa a frase perfeitamente.',
      },
      {
        pais: "Chile",
        bandeira: "🇨🇱",
        idioma: "espanhol",
        antes: "El vuelo",
        depois: "sin problemas a Santiago.",
        dica: 'Tradução: "O voo aterrissou sem problemas em Santiago."',
        opcoes: ["aterrizó", "landed", "despegó"],
        correta: "aterrizó",
        explicacao: 'Em espanhol, "aterrizó" é o passado de "aterrizar" (pousar/aterrissar).',
      },
      {
        pais: "Austrália",
        bandeira: "🇦🇺",
        idioma: "ingles",
        antes: "We",
        depois: "our tickets online last week.",
        dica: 'Tradução: "Nós compramos nossas passagens online semana passada."',
        opcoes: ["bought", "compramos", "buy"],
        correta: "bought",
        explicacao: '"Bought" é o passado do verbo "buy" (comprar) em inglês.',
      },
      {
        pais: "Peru",
        bandeira: "🇵🇪",
        idioma: "espanhol",
        antes: "Subimos la montaña",
        depois: "el amanecer.",
        dica: 'Tradução: "Subimos a montanha para ver o amanhecer."',
        opcoes: ["para ver", "to see", "sin ver"],
        correta: "para ver",
        explicacao: 'Em espanhol, "para ver" indica a finalidade de subir a montanha.',
      },
      {
        pais: "Irlanda",
        bandeira: "🇮🇪",
        idioma: "ingles",
        antes: "They have already",
        depois: "at the hotel.",
        dica: 'Tradução: "Eles já fizeram o check-in no hotel."',
        opcoes: ["checked in", "registrado", "arrived"],
        correta: "checked in",
        explicacao: '"Checked in" é a expressão usada em hotéis e aeroportos em inglês.',
      },
      {
        pais: "Colômbia",
        bandeira: "🇨🇴",
        idioma: "espanhol",
        antes: "El equipaje de mano",
        depois: "debajo del asiento.",
        dica: 'Tradução: "A bagagem de mão cabe embaixo do assento."',
        opcoes: ["cabe", "fits", "pesa"],
        correta: "cabe",
        explicacao: 'Em espanhol, "cabe" vem do verbo "caber".',
      },
      {
        pais: "Canadá",
        bandeira: "🇨🇦",
        idioma: "ingles",
        antes: "Remember to",
        depois: "your seatbelt during takeoff.",
        dica: 'Tradução: "Lembre-se de apertar o cinto de segurança na decolagem."',
        opcoes: ["fasten", "abrochar", "open"],
        correta: "fasten",
        explicacao: '"Fasten your seatbelt" é o aviso padrão dos aviões em inglês.',
      },
      {
        pais: "Argentina",
        bandeira: "🇦🇷",
        idioma: "espanhol",
        antes: "Probamos platos que nunca habíamos",
        depois: "antes.",
        dica: 'Tradução: "Provamos pratos que nunca tínhamos comido antes."',
        opcoes: ["comido", "eaten", "bebido"],
        correta: "comido",
        explicacao: 'Em espanhol, "habíamos comido" é o particípio do verbo comer.',
      },
      {
        pais: "Inglaterra",
        bandeira: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
        idioma: "ingles",
        antes: "The",
        depois: "announced the gate number.",
        dica: 'Tradução: "A tripulação anunciou o número do portão."',
        opcoes: ["crew", "tripulación", "driver"],
        correta: "crew",
        explicacao: 'Em inglês, "crew" significa tripulação de voo ou navio.',
      },
      {
        pais: "Espanha",
        bandeira: "🇪🇸",
        idioma: "espanhol",
        antes: "Aunque llovía, seguimos",
        depois: "la ciudad.",
        dica: 'Tradução: "Embora chovesse, continuamos explorando a cidade."',
        opcoes: ["explorando", "exploring", "durmiendo"],
        correta: "explorando",
        explicacao: 'Em espanhol, o gerúndio "explorando" completa a ação contínua.',
      },
      {
        pais: "Estados Unidos",
        bandeira: "🇺🇸",
        idioma: "ingles",
        antes: "It was an",
        depois: "journey across the country.",
        dica: 'Tradução: "Foi uma jornada inesquecível pelo país."',
        opcoes: ["unforgettable", "inolvidable", "easy"],
        correta: "unforgettable",
        explicacao: 'Em inglês, "unforgettable" significa inesquecível.',
      },
    ],
  };

  // Estado atual da partida
  var estado = {
    modoIdioma: "misto", // "misto", "ingles" ou "espanhol"
    nivel: "facil",
    perguntasDaPartida: [],
    rodadaAtual: 0,
    pontos: 0,
    vidas: CONFIG.vidasIniciais,
    idiomaSelecionado: null,
    palavraSelecionada: null,
    rodadaRespondida: false,
    inicioEmMs: null,
    finalizado: false,
  };

  // Elementos da tela
  var els = {
    startScreen: document.getElementById("start-screen"),
    gameScreen: document.getElementById("game-screen"),
    roundDisplay: document.getElementById("round-display"),
    totalRounds: document.getElementById("total-rounds"),
    scoreDisplay: document.getElementById("score-display"),
    butterflies: document.getElementById("butterflies"),
    countryFlag: document.getElementById("country-flag"),
    countryName: document.getElementById("country-name"),
    levelBadge: document.getElementById("level-badge"),
    stepHint: document.getElementById("step-hint"),
    sentenceText: document.getElementById("sentence-text"),
    sentenceClue: document.getElementById("sentence-clue"),
    wordOptions: document.getElementById("word-options"),
    feedbackBox: document.getElementById("feedback-box"),
    feedbackTitle: document.getElementById("feedback-title"),
    feedbackReason: document.getElementById("feedback-reason"),
    nextRound: document.getElementById("next-round"),
    restart: document.getElementById("restart"),
    result: document.getElementById("result"),
    resultIcon: document.getElementById("result-icon"),
    resultTitle: document.getElementById("result-title"),
    resultText: document.getElementById("result-text"),
    playAgain: document.getElementById("play-again"),
  };

  // 1. Contrato com o portal: avisa que o jogo carregou
  window.parent.postMessage({ type: "vrgame:ready" }, "*");

  function formatarTempo(ms) {
    return (ms / 1000).toFixed(1).replace(".", ",") + "s";
  }

  // Atualiza as borboletas (vidas) na tela
  function atualizarVidas() {
    var texto = "";
    for (var i = 0; i < CONFIG.vidasIniciais; i++) {
      texto += i < estado.vidas ? "🦋" : "⚪";
    }
    els.butterflies.textContent = texto;
  }

  function nomeDoNivel(nivel) {
    if (nivel === "medio") return "Médio";
    if (nivel === "dificil") return "Difícil";
    return "Fácil";
  }

  // Seleciona o modo de idioma na tela inicial
  function escolherModoIdioma(modo) {
    estado.modoIdioma = modo;
    document.querySelectorAll(".btn-choice").forEach(function (btn) {
      btn.classList.toggle("selected", btn.dataset.mode === modo);
    });
  }

  // Inicia a viagem no nível e idioma escolhidos
  function iniciarJogo(nivel) {
    estado.nivel = nivel;
    estado.rodadaAtual = 0;
    estado.pontos = 0;
    estado.vidas = CONFIG.vidasIniciais;
    estado.finalizado = false;
    estado.inicioEmMs = Date.now();

    var bancoNivel = PERGUNTAS[nivel];
    var filtradas;

    if (estado.modoIdioma === "ingles") {
      filtradas = bancoNivel.filter(function (q) {
        return q.idioma === "ingles";
      });
    } else if (estado.modoIdioma === "espanhol") {
      filtradas = bancoNivel.filter(function (q) {
        return q.idioma === "espanhol";
      });
    } else {
      filtradas = bancoNivel.slice();
    }

    estado.perguntasDaPartida = filtradas.slice(0, CONFIG.totalRodadas);

    els.totalRounds.textContent = String(estado.perguntasDaPartida.length);
    els.scoreDisplay.textContent = "0";
    els.levelBadge.textContent = nomeDoNivel(nivel);
    atualizarVidas();

    els.startScreen.hidden = true;
    els.gameScreen.hidden = false;
    els.result.hidden = true;

    carregarRodada();
    reportHeight();
  }

  // Carrega a pergunta e o país da rodada atual
  function carregarRodada() {
    var questao = estado.perguntasDaPartida[estado.rodadaAtual];

    estado.idiomaSelecionado = null;
    estado.palavraSelecionada = null;
    estado.rodadaRespondida = false;

    els.roundDisplay.textContent = String(estado.rodadaAtual + 1);
    els.countryFlag.textContent = questao.bandeira;
    els.countryName.textContent = questao.pais;
    els.stepHint.textContent = "Passo 1: Escolha o idioma falado neste destino.";
    els.sentenceClue.textContent = questao.dica;

    // Monta a frase com o espaço vazio (dropzone)
    els.sentenceText.innerHTML =
      questao.antes +
      ' <span id="blank-slot" class="blank-slot" tabindex="0" aria-label="Espaço vazio da frase">______</span> ' +
      questao.depois;

    configurarEspacoVazio();

    // Limpa seleção dos botões de idioma
    var botoesIdioma = document.querySelectorAll(".btn-lang");
    botoesIdioma.forEach(function (btn) {
      btn.classList.remove("selected");
      btn.disabled = false;
    });

    // Cria os botões das palavras (funcionam por toque/clique e por arrastar)
    els.wordOptions.innerHTML = "";
    questao.opcoes.forEach(function (palavra) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip";
      chip.textContent = palavra;
      chip.draggable = true;
      chip.dataset.word = palavra;

      chip.addEventListener("click", function () {
        selecionarPalavra(palavra);
      });

      chip.addEventListener("dragstart", function (event) {
        if (estado.rodadaRespondida) {
          event.preventDefault();
          return;
        }
        event.dataTransfer.setData("text/plain", palavra);
      });

      els.wordOptions.appendChild(chip);
    });

    els.feedbackBox.hidden = true;
    els.feedbackBox.className = "feedback-box";
    reportHeight();
  }

  // Permite soltar a palavra arrastada dentro do espaço vazio da frase
  function configurarEspacoVazio() {
    var slot = document.getElementById("blank-slot");
    if (!slot) return;

    slot.addEventListener("dragover", function (event) {
      if (estado.rodadaRespondida) return;
      event.preventDefault();
      slot.classList.add("drag-over");
    });

    slot.addEventListener("dragleave", function () {
      slot.classList.remove("drag-over");
    });

    slot.addEventListener("drop", function (event) {
      event.preventDefault();
      slot.classList.remove("drag-over");
      if (estado.rodadaRespondida) return;
      var palavra = event.dataTransfer.getData("text/plain");
      if (palavra) {
        selecionarPalavra(palavra);
      }
    });
  }

  // Quando o jogador escolhe Inglês ou Espanhol
  function selecionarIdioma(idioma) {
    if (estado.rodadaRespondida) return;
    estado.idiomaSelecionado = idioma;

    var botoesIdioma = document.querySelectorAll(".btn-lang");
    botoesIdioma.forEach(function (btn) {
      btn.classList.toggle("selected", btn.dataset.lang === idioma);
    });

    if (!estado.palavraSelecionada) {
      els.stepHint.textContent = "Passo 2: Agora arraste ou toque na palavra certa!";
    } else {
      verificarResposta();
    }
  }

  // Quando o jogador escolhe ou solta uma palavra na frase
  function selecionarPalavra(palavra) {
    if (estado.rodadaRespondida) return;
    estado.palavraSelecionada = palavra;

    var slot = document.getElementById("blank-slot");
    if (slot) {
      slot.textContent = palavra;
      slot.classList.add("filled");
    }

    var chips = els.wordOptions.querySelectorAll(".word-chip");
    chips.forEach(function (chip) {
      chip.classList.toggle("selected", chip.dataset.word === palavra);
    });

    if (!estado.idiomaSelecionado) {
      els.stepHint.textContent = "Falta escolher o idioma lá em cima (Inglês ou Espanhol)!";
    } else {
      verificarResposta();
    }
  }

  // Confere se o idioma e a palavra estão certos
  function verificarResposta() {
    estado.rodadaRespondida = true;
    var questao = estado.perguntasDaPartida[estado.rodadaAtual];

    var idiomaCerto = estado.idiomaSelecionado === questao.idioma;
    var palavraCerta = estado.palavraSelecionada === questao.correta;
    var acertouTudo = idiomaCerto && palavraCerta;

    document.querySelectorAll(".btn-lang, .word-chip").forEach(function (el) {
      el.disabled = true;
    });

    els.feedbackBox.hidden = false;

    if (acertouTudo) {
      estado.pontos += 1;
      els.scoreDisplay.textContent = String(estado.pontos);
      els.feedbackBox.classList.add("is-correct");
      els.feedbackTitle.textContent = "✅ Muito bem! Você acertou o destino e a palavra!";
      els.feedbackReason.textContent = questao.explicacao;
    } else {
      estado.vidas -= 1;
      atualizarVidas();
      els.feedbackBox.classList.add("is-wrong");

      var motivoErro = "";
      if (!idiomaCerto && !palavraCerta) {
        motivoErro =
          "O idioma correto era " +
          (questao.idioma === "ingles" ? "Inglês" : "Espanhol") +
          ' e a palavra certa era "' +
          questao.correta +
          '". ';
      } else if (!idiomaCerto) {
        motivoErro =
          "Você acertou a palavra, mas em " +
          questao.pais +
          " se fala " +
          (questao.idioma === "ingles" ? "Inglês" : "Espanhol") +
          "! ";
      } else {
        motivoErro =
          'O idioma está certo, mas a palavra correta era "' +
          questao.correta +
          '". ';
      }

      els.feedbackTitle.textContent = "❌ Ops! Você perdeu uma borboleta.";
      els.feedbackReason.textContent = motivoErro + questao.explicacao;
    }

    if (
      estado.vidas <= 0 ||
      estado.rodadaAtual + 1 >= estado.perguntasDaPartida.length
    ) {
      els.nextRound.textContent = "Ver resultado da viagem 🏁";
    } else {
      els.nextRound.textContent = "Próximo destino ✈️";
    }

    reportHeight();
  }

  // Avança para a próxima rodada ou encerra a partida
  function avancarRodada() {
    if (estado.vidas <= 0) {
      finalizarJogo(false);
      return;
    }

    estado.rodadaAtual += 1;
    if (estado.rodadaAtual >= estado.perguntasDaPartida.length) {
      finalizarJogo(true);
      return;
    }

    carregarRodada();
  }

  // Finaliza o jogo e envia a pontuação para o portal
  function finalizarJogo(completou) {
    estado.finalizado = true;
    var tempoEmMs = estado.inicioEmMs ? Date.now() - estado.inicioEmMs : 0;
    var maximo = estado.perguntasDaPartida.length;

    els.result.hidden = false;

    if (completou) {
      els.resultIcon.textContent = "🏆🦋";
      els.resultTitle.textContent = "Viagem concluída!";
      els.resultText.textContent =
        "Você acertou " +
        estado.pontos +
        " de " +
        maximo +
        " destinos no nível " +
        nomeDoNivel(estado.nivel) +
        " em " +
        formatarTempo(tempoEmMs) +
        "!";
    } else {
      els.resultIcon.textContent = "🦋";
      els.resultTitle.textContent = "Suas borboletas voaram!";
      els.resultText.textContent =
        "Você fez " +
        estado.pontos +
        " pontos antes de perder as 3 vidas. Que tal tentar de novo?";
    }

    // 2. Contrato com o portal: envia o resultado final
    window.parent.postMessage(
      {
        type: "vrgame:finish",
        score: estado.pontos,
        maxScore: maximo,
        timeMs: tempoEmMs,
        detail: {
          jogo: CONFIG.nomeJogo,
          nivel: estado.nivel,
          idioma: estado.modoIdioma,
        },
      },
      "*"
    );

    reportHeight();
  }

  // Volta para a tela inicial
  function voltarAoInicio() {
    estado.finalizado = false;
    estado.rodadaAtual = 0;
    estado.pontos = 0;
    estado.vidas = CONFIG.vidasIniciais;

    els.roundDisplay.textContent = "0";
    els.scoreDisplay.textContent = "0";
    atualizarVidas();

    els.result.hidden = true;
    els.gameScreen.hidden = true;
    els.startScreen.hidden = false;
    reportHeight();
  }

  // 3. Tema claro e escuro enviado pelo portal ou pelo navegador
  function applyTheme(theme) {
    if (theme === "dark" || theme === "light") {
      document.documentElement.dataset.theme = theme;
    }
  }

  function preferredTheme() {
    try {
      var fromQuery = new URLSearchParams(window.location.search).get("theme");
      if (fromQuery === "dark" || fromQuery === "light") return fromQuery;
    } catch (error) {
      // ignora se indisponível
    }

    try {
      var saved = window.localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") return saved;
    } catch (error) {
      // ignora se bloqueado
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  // 4. Avisa o portal quando a altura da página muda
  var lastHeight = 0;
  function reportHeight() {
    var height = Math.ceil(document.body.getBoundingClientRect().height);
    if (Math.abs(height - lastHeight) < 4) return;
    lastHeight = height;
    window.parent.postMessage({ type: "vrgame:resize", height: height }, "*");
  }

  window.addEventListener("message", function (event) {
    if (!event.data) return;

    if (event.data.type === "vrgame:theme") {
      applyTheme(event.data.theme);
    }

    if (event.data.type === "vrgame:fullscreen") {
      document.documentElement.classList.toggle(
        "is-fullscreen",
        Boolean(event.data.fullscreen)
      );
    }
  });

  // Eventos dos botões
  document.querySelectorAll(".btn-choice").forEach(function (btn) {
    btn.addEventListener("click", function () {
      escolherModoIdioma(btn.dataset.mode);
    });
  });

  document.querySelectorAll(".btn-level").forEach(function (btn) {
    btn.addEventListener("click", function () {
      iniciarJogo(btn.dataset.level);
    });
  });

  document.querySelectorAll(".btn-lang").forEach(function (btn) {
    btn.addEventListener("click", function () {
      selecionarIdioma(btn.dataset.lang);
    });
  });

  els.nextRound.addEventListener("click", avancarRodada);
  els.restart.addEventListener("click", voltarAoInicio);
  els.playAgain.addEventListener("click", voltarAoInicio);

  applyTheme(preferredTheme());

  if (window.self === window.top) {
    document.documentElement.classList.add("is-standalone");
  }

  window.addEventListener("storage", function (event) {
    if (event.key === "theme") applyTheme(event.newValue);
  });

  window.addEventListener("resize", reportHeight);
  if ("ResizeObserver" in window) {
    new ResizeObserver(reportHeight).observe(document.body);
  }
  window.requestAnimationFrame(reportHeight);
})();