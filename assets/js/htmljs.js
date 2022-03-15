let pobre = document.querySelector('#pobre')

let imagens = [
    'https://comoinvestir.thecap.com.br/medias/2021/01/10-sinais-de-que-voce-sempre-sera-pobre.webp',
    'https://www.jornalcontabil.com.br/wp-content/uploads/2021/12/dinheiro-20-1024x640.jpg',
    'https://1milhaocom30.com/wp-content/uploads/2018/06/rico-reduzida.jpg'
]

let img = document.querySelector('#mudaimg')
let texto = document.querySelector('#texto')

function troca(){
    let aleatorio = Math.floor(3 * Math.random())
    img.src = imagens[aleatorio]
    if(aleatorio == 1){
        texto.innerHTML = 'Classe Média'
    } else if (aleatorio == 2){
        texto.innerHTML = 'RICOO'
    } else {
        texto.innerHTML = 'Pobre'
    }
}