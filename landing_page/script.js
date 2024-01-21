const hamburguer = document.querySelector('.hamburguer')
const navAll = document.querySelector('.nav-all')

hamburguer.addEventListener('click', open)

function open(){
    navAll.classList.toggle('open')
}
