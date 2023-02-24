"use strict";
// Створити сторінку:

//    1) якщо користувач відкриває її вперше, то йому пропонується
//    ввести своє ім'я.

//наприклад:

//після вводу ці поля замінюються на

//(замість NoName те, що ввів користувач)

//2) якщо користувач заходить на сторінку повторно, то він одразу бачить

//де замість NoName його ім'я

//Також увесь код розбити на модулі:

//    1) модуль, якій перевіряє валідність введеного ім'я. експортує функцію,
//    яка приймає ім'я і повертає тру, якщо воно валідне, інакше фолс

//2) модуль, якій "малює" елементи на сторінці. експортує 2 функції:

//    renderInput: функція, яка приймає обробник для кнопки і показує на
//    сторінці поля для вводу ім'я, нічого не повертає
//renderWelcomeMessage: функція, яка приймає ім'я користувача і показує на
// сторінці вітання
//3) основний модуль, який виконує саме завдання, імпортуючи і
// використовуючи функції модулів 1 і 2

//Умови:

//    повторний виклик функцій-відмальовувачів повинен перестворювати
//    елементи, а не додавати нові
//renderWelcomeMessage повинен прибирати ті елементи, які вже є
//наприклад:

//    якщо кілька разів викликати renderInput, а потім кілька разів
//    renderWelcomeMessage, то на сторінці має показувати тільки 1
//    вітальне повідомлення
//якщо кілька разів викликати renderInput, а потім кілька разів
// renderWelcomeMessage, потім знову кілька разів renderInput,
// то на сторінці має показувати тільки питання, поле вводу і кнопку

const div = document.createElement('div')
const p = document.createElement('p')
const input = document.createElement('input')
const btn = document.createElement('button')
document.body.append(div)

function renderInput(handlerFunc) {
    div.append(p)
    p.textContent = 'Hi,what is your name?'
    input.type = "text"
    input.name = "name"
    div.append(input)
    div.append(btn)
    btn.textContent = 'OK'
    btn.onclick = handlerFunc
}

function renderWelcomeMessage(name){
    p.textContent = `Hello  ${name}`
    btn.remove()
    input.remove()
}

export {renderInput,renderWelcomeMessage,div,p,btn,input};