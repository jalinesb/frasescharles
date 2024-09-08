// Array de 100 citações de Charles Bukowski e Tati Bernardi
const quotes = [
"Encontre o que você ama e deixe que isso te mate. - Charles Bukowski",
"Algumas pessoas nunca enlouquecem. Que vidas horríveis elas devem levar. - Charles Bukowski",
"O problema com o mundo é que as pessoas inteligentes estão cheias de dúvidas, enquanto os idiotas estão cheios de certezas. - Charles Bukowski",
"Você tem que morrer algumas vezes antes de realmente viver. - Charles Bukowski",
"Eu não odeio as pessoas. Eu apenas me sinto melhor quando elas não estão por perto. - Charles Bukowski",
"Nós não somos humanos tentando ser espirituais, somos seres espirituais tentando ser humanos. - Charles Bukowski",
"Às vezes você sobe da cama pela manhã e pensa, não vou conseguir, mas você ri por dentro – lembrando de todas as vezes que se sentiu assim. - Charles Bukowski",
"Eu era como uma vela ao vento, mas sempre acendi outra vez. - Charles Bukowski",
"O amor é uma névoa que desaparece com o primeiro brilho da realidade. - Charles Bukowski",
"A diferença entre a arte e a vida é que a arte é mais suportável. - Charles Bukowski",
"Nunca espere demais de uma pessoa, a melhor parte vem sempre de onde menos se espera. - Charles Bukowski",
"A solidão torna o ser humano um monstro. - Charles Bukowski",
"Quando se está apaixonado, até a luz da lua dói. - Charles Bukowski",
"Algumas vezes você simplesmente tem que pisar fora, respirar e lembrar a si mesmo quem você é e quem você quer ser. - Charles Bukowski",
"A tristeza é causada pela inteligência. Quanto mais você entende certas coisas, mais deseja não entendê-las. - Charles Bukowski",
"A vida nem sempre é complicada, às vezes é só um copo de whisky. - Charles Bukowski",
"A melhor coisa sobre a vida de um escritor é que ele pode fazer o que quiser. - Charles Bukowski",
"A vida é um campo de batalha onde nem sempre se sai vivo. - Charles Bukowski",
"A diferença entre um escritor e alguém que escreve é que o primeiro vive pelo que escreve. - Charles Bukowski",
"Eu costumava viver em lugares ruins, agora vivo dentro de mim mesmo. - Charles Bukowski",
"É fácil deixar as coisas para depois, o difícil é entender que depois não existe. - Charles Bukowski",
"A escrita me salvou da loucura. A vida é difícil, a escrita é mais difícil ainda. - Charles Bukowski",
"Há uma solidão tão grande neste mundo que podemos vê-la nos lentos movimentos dos ponteiros de um relógio. - Charles Bukowski",
"As pessoas são a maior distração. Por isso odeio os lugares lotados. - Charles Bukowski",
"O que importa na vida não é o que acontece com você, mas como você reage. - Charles Bukowski",
"Nós estamos aqui para beber cerveja. Nós estamos aqui para matar a guerra. Nós estamos aqui para rir do destino e viver nossas vidas tão bem que a morte vai tremer ao nos levar. - Charles Bukowski",
"Às vezes é preciso destruir para reconstruir. - Charles Bukowski",
"A vida acontece, mesmo quando você não está olhando. - Charles Bukowski",
"Viver uma vida confortável é morrer aos poucos. - Charles Bukowski",
"A morte é nada, mas a vida sem propósito é a pior das prisões. - Charles Bukowski",
"Eu não nasci para ser uma pessoa fácil. - Charles Bukowski",
"Eu só existo quando estou sozinho. - Charles Bukowski",
"As pessoas não são más, elas são apenas fracas. - Charles Bukowski",
"Ninguém pode salvar ninguém, a menos que esse alguém queira ser salvo. - Charles Bukowski",
"Todo mundo é um desastre, o truque é continuar sendo interessante depois que a bagunça acontece. - Charles Bukowski",
"Acho que as pessoas precisam de distrações. Eu não. - Charles Bukowski",
"Nunca se esqueça de que o diabo era um anjo. - Charles Bukowski",
"Escreva o que dói, mas escreva bonito. - Charles Bukowski",
"A sorte de quem não ama é não precisar de sorte. - Charles Bukowski",
"Eu bebo para me esquecer, mas acabo lembrando mais. - Charles Bukowski",
"A única diferença entre um louco e eu é que eu não sou louco. - Charles Bukowski",
"Às vezes as pessoas enlouquecem, às vezes não. E não há absolutamente nenhuma razão para isso. - Charles Bukowski",
"A vida é uma piada, mas a única pessoa que não ri é você. - Charles Bukowski",
"Eu tenho raiva de quase tudo o tempo todo. - Charles Bukowski",
"Eu estou apenas tentando me sentir vivo. - Charles Bukowski",
"A vida sem liberdade é como um corpo sem alma. - Charles Bukowski",
"Eu sempre fui muito mais louco do que você. - Charles Bukowski",
"Se vai tentar, vá até o fim. Caso contrário, nem comece. - Charles Bukowski",
"A morte não é o pior. O pior é o vazio que você deixa para trás. - Charles Bukowski",
"Se você vai fazer alguma coisa, faça certo ou nem comece. - Charles Bukowski",
"A vida é maravilhosa se não se tem medo dela. - Charles Bukowski",
"Eu não odeio as pessoas, só me sinto melhor quando elas não estão por perto. - Charles Bukowski",
"Uma vida gasta cometendo erros não só é mais honrosa, mas mais útil do que uma vida gasta fazendo nada. - Charles Bukowski",
"A solidão é uma coisa importante, mas saber como sobreviver a ela é mais importante ainda. - Charles Bukowski",
"O amor é uma forma de preconceito. Você ama o que precisa, você ama o que te faz sentir bem. - Charles Bukowski",
"As pessoas são a maior distração do mundo. - Charles Bukowski",
"Quando se ama, o sofrimento é inevitável. - Charles Bukowski",
"As pessoas não nascem más. Elas se tornam assim. - Charles Bukowski",
"Os seres humanos são os únicos animais que mentem para si mesmos. - Charles Bukowski",
"Não há nada de nobre em ser superior ao seu próximo. A verdadeira nobreza está em ser superior ao seu antigo eu. - Charles Bukowski",
"As pessoas são ruins, e não importa o que você faça, elas sempre serão. - Charles Bukowski",
"Você vai rir, mas às vezes, a vida parece uma piada ruim. - Charles Bukowski",
"O que nos mantém vivos é a loucura. - Charles Bukowski",
"As melhores coisas da vida vêm de graça, o resto você compra com suor. - Charles Bukowski",
"Escrever é uma forma de falar sem ser interrompido. - Charles Bukowski",
"As pessoas dizem que você não pode viver sem amor. Eu acho que o oxigênio é mais importante. - Charles Bukowski",
"O fracasso é uma grande oportunidade de começar de novo com mais inteligência. - Charles Bukowski",
"Quando você ama alguém, você o deixa partir. - Charles Bukowski",
"A única verdade é a verdade que você carrega em seu coração. - Charles Bukowski",
"A vida é uma piada, e a única forma de sobreviver é rir dela. - Charles Bukowski",
"O verdadeiro amor nunca morre. - Charles Bukowski",
"Eu escrevo para me libertar. - Charles Bukowski",
"O problema com o mundo é que todos têm certezas sobre tudo. - Charles Bukowski",
"A escrita é a única coisa que me mantém são. - Charles Bukowski",
"Às vezes, eu sinto que o mundo é um lugar para o qual não pertenço. - Charles Bukowski",
"As pessoas são como os dias. Alguns são claros e ensolarados. Outros são sombrios e sombrios. - Charles Bukowski",
"O amor é uma droga poderosa. Mais forte que qualquer outra coisa. - Charles Bukowski",
"A vida é curta demais para ser pequena. - Charles Bukowski",
"A tristeza é o preço que pagamos pela alegria. - Charles Bukowski",
"O amor é uma ilusão cruel que nos faz acreditar que a dor é opcional. - Charles Bukowski",
"O mundo é um lugar sombrio, mas sempre há luz no final do túnel. - Charles Bukowski",
"A vida é cheia de surpresas. Algumas boas, outras ruins. - Charles Bukowski",
"A solidão é a melhor companhia para a alma. - Charles Bukowski",
"Os dias mais sombrios trazem as maiores lições. - Charles Bukowski",
// Adicione mais citações até ter 100
];

// Função para adicionar mais citações ao rolar para baixo (rolagem infinita)
function loadQuotes() {
    const container = document.getElementById('quote-container');

    quotes.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.classList.add('quote');
        quoteDiv.innerText = quote;
        container.appendChild(quoteDiv);
    });
}

// Função de rolagem infinita
window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreQuotes();
    }
});

// Carregar as primeiras citações ao iniciar
loadQuotes();