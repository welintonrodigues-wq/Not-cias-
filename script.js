
const botoes = document.querySelectorAll(".virar");

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
            const cartao = botao.closest(".cartao");

                    cartao.classList.toggle("virado");
                        });
                        });
                        