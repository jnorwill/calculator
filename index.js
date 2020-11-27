const listButtons = document.querySelectorAll('.button')
const screen = document.querySelector('.screen')
listButtons.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.innerHTML == 'AC') {
            screen.innerHTML = '';
            return
        }
        if (item.innerHTML == 'DEL') {
            let newValue = screen.innerHTML.split('')
            newValue.pop() 

          
            screen.innerHTML = newValue.join('')
            return
        }
        if (item.innerHTML == '=') {
            screen.innerHTML = eval(screen.innerHTML)
            return
        }
        screen.innerHTML += item.innerHTML;
    })
})
