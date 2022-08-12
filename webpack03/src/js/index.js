import "../scss/style.scss";

console.log("Hello Lorena");

// variável recebe o nosso aplicativo
const app = document.getElementById("app");
// variável recebe a criação de um elemento virtual chamado h1
const hello = document.createElement("hi");
// inserimos dentro deste elemento virtual um HTML usando innerHTML
hello.innerHTML = "Hi bem vindo!";
//acrescentamos ao elemento 'app' o elemento 'hello'
app.append(hello);