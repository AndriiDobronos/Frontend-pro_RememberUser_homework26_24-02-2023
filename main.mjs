import {nameIsValid}  from './validator.mjs'
import {renderInput,renderWelcomeMessage,div,p,btn,input} from './createElements.mjs'

const checkStorage = localStorage.getItem('newUser')
if(!checkStorage) {
    renderInput(function onOkClick()   {
        btn.remove();
        input.remove();
        setTimeout(function() {p.remove()}, 2000)
        setTimeout(function() {div.remove()}, 3000)
    })

    input.addEventListener('input',function (event) {
        const userInput = event.target.value
        if(nameIsValid(`${userInput}`)){
            p.textContent = 'Hi,what is your name?'
            div.style.borderColor = "lightgreen"
            btn.onclick = () => {
                if(userInput.length !== 1){
                    renderWelcomeMessage(`${userInput}`)
                    localStorage.setItem('newUser', `${userInput}`)
                }
            }
        }else if(userInput === ''){
            p.textContent = 'Hi,what is your name?'
            div.style.borderColor = "darkblue"
        }else {
            p.textContent  =`Name: ${userInput} is invalid`
            div.style.borderColor = "red"
        }
    })
} else {
    div.append(p)
    renderWelcomeMessage(`${checkStorage}`)
}