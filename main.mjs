"use strict";
import {nameIsValid}  from './validator.mjs'
import {renderInput,renderWelcomeMessage,div,p,btn,input} from './createElements.mjs'

const checkStorage = localStorage.getItem('newUser')
if(!checkStorage) {
    let userInput = ''
    input.addEventListener('input',function (event) {
        userInput = event.target.value
        if(nameIsValid(`${userInput}`)) {
            p.textContent = 'Hi,what is your name?'
            div.style.borderColor = "lightgreen"
        }else if (userInput.length >= 1){
            div.style.borderColor = "red"
        }else{
            p.textContent = 'Hi,what is your name?'
            div.style.borderColor = "darkblue"
        }
    })
    renderInput(function onOkClick() {
        if(nameIsValid(`${userInput}`)) {
            renderWelcomeMessage(`${userInput}`)
            localStorage.setItem('newUser', `${userInput}`)
        }else if(userInput.length >= 1){
            p.textContent  =`Name: ${userInput} is invalid`
        }else{
            p.textContent = `Do you want to go out ?\n
             If not, fill out the form`;
            btn.onclick = () => {
                if (userInput === '') {
                    p.textContent = "Ok Goodbye"
                    setTimeout(function() {div.remove()}, 2000)
                }else if(nameIsValid(`${userInput}`)) {
                    renderWelcomeMessage(`${userInput}`)
                    localStorage.setItem('newUser', `${userInput}`)
                }else {
                    p.textContent  =`Name: ${userInput} is invalid`
                }
            }
        }
    })
} else {
    div.append(p)
    renderWelcomeMessage(`${checkStorage}`)
}