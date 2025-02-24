const feedbacks = [
    {
        id: "1",
        image: "assets/newmar.jfif",
        alt: "Newmar Lucas de Souza Alcântara",
        name: "Newmar Lucas de Souza Alcântara",
        ocupation: "Software engineer",
        feedback: "Como desenvolvedor frontend, tive a oportunidade de colaborar estreitamente com ele, que desempenhava o papel de backend em nossa equipe. José é um profissional excepcional, sempre entregando um trabalho de alta qualidade. Além disso, sua disposição para aprender e explorar novas tecnologias é verdadeiramente inspiradora. Sua abordagem descontraída e positiva torna o ambiente de trabalho mais leve e agradável. Recomendo José como um colega talentoso e dedicado que faz a diferença em qualquer equipe que esteja."
    },
    {
        id: "2",
        image: "assets/andre.jfif",
        alt: "André Meireles",
        name: "André Meireles",
        ocupation: "Senior Developer/Techlead",
        feedback: "Lucas é um excelente profissional, dedicado em entregar suas tarefas com qualidade máxima e rapidamente, rápido em entender as regras de negócio e aplicar os conceitos no código. Aprende rápido, está sempre disposto a ajudar e ensinar, trabalhar com ele foi uma experiência ótima."

    },
]

window.addEventListener("load", () => {
    const feedbacksContainer = document.querySelector("#feedbacks .flex-container")
    feedbacks.forEach(feedback => {
        const feedbackCard = document.createElement("div")
        feedbackCard.classList.add("feedbacks-cards")

        feedbackCard.innerHTML = `
            <div class="top">
                <div class="top-image">
                    <img src="${feedback.image}" alt="${feedback.alt}">
                </div>
                <div class="top-text">
                    <h2>${feedback.name}</h2>
                    <p>${feedback.ocupation}</p>
                </div>
            </div>
            <div class="content">
                <p>${feedback.feedback}</p>
            </div>`

        feedbacksContainer.appendChild(feedbackCard)
    })
})