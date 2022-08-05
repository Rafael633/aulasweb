//Pega o elemento DOM com o ID APP
const app = document.getElementById("app")

//Cria um novo elemento DOM na memória do JS
const h1 = document.createElement('h1')

//Adiciona HTML a este elemento
h1.innerHTML = "Hello from JavaSript"

//Adiciona o filho H1 
app.appendChild(h1)