# **DOM no HTML e JavaScript na Web**

O **DOM (Document Object Model)** é uma interface que representa a estrutura de uma página web como uma árvore de objetos. Ele permite que o **JavaScript** acesse, manipule e modifique elementos HTML dinamicamente, tornando as páginas interativas e dinâmicas.

## 1. O que é DOM?  
O DOM transforma a estrutura do HTML em uma **árvore de nós**, onde cada elemento, atributo e conteúdo torna-se um objeto que pode ser acessado e manipulado com JavaScript.

## 2. Acessando Elementos  
Com JavaScript, é possível acessar elementos HTML através de métodos como:

- `document.getElementById()`  
- `document.getElementsByClassName()`  
- `document.querySelector()`  
- `document.querySelectorAll()`

Esses métodos são usados para **selecionar elementos** da página e realizar alterações ou adicionar comportamentos.

## 3. Manipulando Conteúdo  
O DOM permite alterar textos, atributos, classes e estilos dos elementos. Exemplos:

- `element.innerText` – altera o texto visível.  
- `element.setAttribute()` – altera atributos HTML.  
- `element.style` – modifica estilos diretamente.  
- `element.classList.add()` / `.remove()` / `.toggle()` – manipula classes CSS.

## 4. Eventos e Interatividade  
O JavaScript usa o DOM para **ouvir eventos** e responder a ações do usuário:

```javascript
const botao = document.getElementById("enviar");
botao.addEventListener("click", () => {
  alert("Formulário enviado!");
});
```

---