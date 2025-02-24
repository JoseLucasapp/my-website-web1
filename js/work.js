const workExperience = [
    {
        id: "1",
        company: "Webjump",
        position: "Desenvolvedor fullstack e consultor AEM",
        date: "set 2023 - o momento",
        description: "Atuo como Desenvolvedor Fullstack com foco em Magento e Adobe Experience Manager (AEM), integrando habilidades em desenvolvimento back-end, front-end e gerenciamento de conteúdo digital. Além de criar soluções técnicas, também utilizo Inteligência Artificial para implementar automações que otimizam processos e agregam valor às plataformas.",
    },
    {
        id: "2",
        company: "Devnology",
        position: "Desenvolvedor Backend e Crawler",
        date: "set 2022 - jan 2023",
        description: "Desenvolvimento de APIs REST e bots inteligentes voltados para otimização e automação do processo de compra de passagens aéreas, proporcionando eficiência e praticidade aos usuários."
    },
    {
        id: "3",
        company: "Código_Font",
        position: "Desenvolvedor Fullstack",
        date: "mai 2021 - jul 2022",
        description: "Desenvolvimento de APIs REST, aplicativos front-end e back-end, e automação de processos para otimização de fluxos de trabalho e aumentar a eficiência do trabalho."
    }
]


window.addEventListener("load", () => {
    const projectsContainer = document.querySelector("#work .work-container")
    workExperience.forEach(work => {
        const workCard = document.createElement("div")
        workCard.classList.add("work-card")

        workCard.innerHTML = `
            <div class="work-card-content">
                <h3>${work.company}</h3>
                <h4>${work.position}</h4>
                <span>${work.date}</span>
                <p>${work.description}</p>
            </div>
        `
        projectsContainer.appendChild(workCard)
    })
})