const projects = [
    {
        id: "1",
        name: "Sociau",
        image: "./assets/sociau.jpeg",
        alt: "Sociau",
        description: "Projeto de extensão vencedor de 3 selos de impacto social. O principal objetivo do sociau é facilitar a adoção de animais, funcionando como uma ponte.",
        link: "https://sociau.github.io/Sociau-website/",
    },
    {
        id: "2",
        name: "Jogo da moeda",
        image: "./assets/coingame.png",
        alt: "Jogo da moeda",
        description: "Jogo da moeda feito com HTML, CSS e JavaScript. Foi utilizado na feira de profissões pelo curso de ADS e prendeu a atenção de muitos alunos.",
        link: "https://joselucasapp.github.io/coin-game/",
    },
    {
        id: "3",
        name: "Corrida entre Cores",
        image: "./assets/colors.png",
        alt: "Corrida entre Cores",
        description: "Corrida entre Cores é um jogo divertido e interativo onde os jogadores competem girando um dado para sortear uma cor. Cada cor avança uma casa no tabuleiro, e o primeiro a chegar ao final vence. Foi utilizado na feira de profissões pelo curso de ADS e prendeu a atenção de muitos alunos.",
        link: "https://joselucasapp.github.io/jogo-dos-quadrados/",
    },

    {
        id: "4",
        name: "Analise de dados com Python",
        image: "./assets/chart.png",
        alt: "Rey supreme",
        description: "Esse projeto basicamente recebe um excel e analisa os dados de um campeonato de futebol gerando gráficos detalhados.",
        link: "https://github.com/JoseLucasapp/spreadsheet_analysis_python",
    },
    {
        id: "5",
        name: "Chat app",
        image: "./assets/web-chat.png",
        alt: "Chat logo",
        description: "Chat app desenvolvido com Node usando sockets.",
        link: "https://github.com/JoseLucasapp/Chat-app",
    },
    {
        id: "6",
        name: "Jogo da Velha",
        image: "./assets/jogo-da-velha.png",
        alt: "Rey supreme",
        description: "Meu primeiro projeto de todos, tenho medo desse código até hoje.",
        link: "https://github.com/JoseLucasapp/Tic-tac-toe-game",
    },

]

window.addEventListener("load", () => {
    const projectsContainer = document.querySelector("#projects .grid-container")
    projects.forEach(project => {
        const projectCard = document.createElement("div")
        projectCard.classList.add("card")

        projectCard.innerHTML = `
            <div class="card-content">
                <h3>${project.name}</h3>
                <img id="${"img" + project.id}" src="${project.image}" alt="${project.alt}">
                <p>${project.description}</p>   
            </div>
            <a href="${project.link}" target="_blank" class="btn">Ver Projeto</a>
        `
        projectsContainer.appendChild(projectCard)
    })
})