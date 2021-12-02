document.addEventListener('DOMContentLoaded', () => {


    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener('click', tratarClick)

    })

})

function tratarClick(event) {
    
    let square = event.target
    let position = square.id

    

    if (tratarMovimento(position)) {
        

        setTimeout(() => {
            if (playerTime == 0){
                alert("O Jogo Acabou, o vencedor foi o jogador ' O '")
            } else {
                alert("O Jogo Acabou, o vencedor foi o jogador ' X '")
            }
        }, 10)
        
    }
    atualizarQuadrados()
}

function atualizarQuadrados(){
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}

function reboot() {
    location.reload()
}
