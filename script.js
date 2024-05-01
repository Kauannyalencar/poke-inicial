const welcomeTrainer = document.getElementById("welcome")
const pInit = document.getElementById("text-init")
function showText(text) {
    const char = text.textContent.split("").reverse();
    welcomeTrainer.textContent = ''

    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer);
        };
        const next = char.pop()
        welcomeTrainer.textContent += next;
    }, 48)
}

showText(welcomeTrainer)

/*
No onclick do card podemos soltar o cry do pokemon, dá para fazer com dataset e forEach index
*/

const card = document.querySelectorAll(".card");
const pokeAtivo = document.querySelectorAll(".informacoes")

const escolha = document.querySelectorAll(".botoes-escolha button")
const escolhido = document.querySelector(".choosen");
const span = document.querySelector(".poke-choosen")


card.forEach((cartao, index) => {
    const nome = card.innerText;
    let imgPoke = document.createElement('img')
    cartao.addEventListener("click", () => {
        if (cartao.dataset.poke === pokeAtivo[index].dataset.poke) {

            pokeAtivo[index].classList.add("ativo")
            card.forEach(cartao => {
                cartao.style.display = 'none'
            })
        }
        //Ver se o poke foi escolhido, se sim remover os elementos da tela e mostrar a mensagem 
        escolha.forEach((btn, indece) => {
            btn.addEventListener("click", () => {
                if (btn.textContent === "Sim") {
                    console.log("click");
                    pokeAtivo[index].classList.remove("ativo");
                    console.log(pokeAtivo[index]);
                    pInit.textContent = `Sua escolha foi ${card[index].innerText}! Boa sorte na sua jornada!`
                    imgPoke.src = `img/${pokeAtivo[index].dataset.poke}.gif`
                } else {
                    console.log("No");
                    pokeAtivo[index].classList.remove("ativo");
                    card.forEach(cartao => {
                        cartao.style.display = 'flex'
                    })
                    pInit.insertAdjacentElement("beforebegin", imgPoke)
                }
            })
        })
    })
})
