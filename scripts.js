const botao = document.querySelector('.meu-botao')
const menuLateral = document.querySelector('.menu-lateral')
const conteudo = document.querySelector('.conteudo')
const backbackground = document.querySelector('.background')

botao.addEventListener('click', () => {
    
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    backbackground.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})
backbackground.addEventListener('click', () =>{
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    backbackground.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
})