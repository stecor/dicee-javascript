let player1 = Math.floor(Math.random() * 6) + 1
let player2 = Math.floor(Math.random() * 6) + 1

if (player1 > player2) {
  document.querySelector('h1').innerHTML = '&#128681Player 1 Wins!'
} else if (player1 < player2) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins!&#128681'
} else {
  document.querySelector('h1').innerHTML = 'Draw!'
}

document
  .querySelector('.img1')
  .setAttribute('src', 'images/dice' + player1 + '.png')

document
  .querySelector('.img2')
  .setAttribute('src', 'images/dice' + player2 + '.png')
