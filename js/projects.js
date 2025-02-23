const projects = [
    {
        id: "1",
        name: "Sociau",
        image: "../assets/sociau.jpeg",
        alt: "Sociau",
        description: "Projeto de extensão vencedor de 3 selos de impacto social. O principal objetivo do sociau é facilitar a adoção de animais, funcionando como uma ponte.",
        link: "https://sociau.github.io/Sociau-website/",
    },
    {
        id: "2",
        name: "Jogo da moeda",
        image: "../assets/coingame.png",
        alt: "Jogo da moeda",
        description: "Jogo da moeda feito com HTML, CSS e JavaScript. Foi utilizado na feira de profissões pelo curso de ADS e prendeu a atenção de muitos alunos.",
        link: "https://joselucasapp.github.io/coin-game/",
    },
    {
        id: "3",
        name: "Meu site profissional",
        image: "../assets/rey.jpg",
        alt: "Rey supreme",
        description: "Meu site profissional desenvolvido com ReactJS.",
        link: "https://www.joselucasapp.com/",
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