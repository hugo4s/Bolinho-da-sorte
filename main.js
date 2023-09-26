const tremer = document.getElementById('tremer')
const screen1= document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const butao = document.getElementById('butao')

biblioteca = [
"Nessa vida difícil tudo ainda pode piorar",
"Não desanime, as coisas piores da vida ainda estão chegando por aí",
"Nunca é tarde demais para errar mais uma vez",
"O segredo do sucesso é fazer o contrário do que você está fazendo.",
"O mérito da derrota é todinho seu, orgulhe-se.",
"O problema não está na segunda-feira, está na sua vida",
"Nunca foi azar, sempre foi incompetência!",
"Quando a vida te derrubar, aproveite e tire uma sesta.",
"Quando tudo der errado, acostume-se.",
"Acreditar que você consegue já é meio caminho para o fracasso."
]

function pickBiblioteca() {
  let allBiblioteca = biblioteca.length
  let randomNumber = Math.floor(Math.random() * allBiblioteca)  
  document.querySelector(".screen2 p").innerText = `${biblioteca[randomNumber]}`
}

tremer.addEventListener('click', function() {
  pickBiblioteca()
  screen1.classList.add('hide')
  screen2.classList.remove('hide')
})

butao.addEventListener('click', function() {
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
})

