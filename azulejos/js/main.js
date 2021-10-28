//ceci est un commentaire en JS (on peut faire aussi "cont + /")
// alert("Bonjour")

const getRandomColor = () => {
  const r = Math.random()
  if (r < 0.5){
   return 'rgb(224, 84, 18)'
  }
return 'rgb(224, 172, 28)'
}

const createType1 = () => {
  const source = document.querySelector('#library .type1')
  const clone = source.cloneNode(true)
  clone.style.backgroundColor = getRandomColor()
  clone.querySelector('.layer1').style.backgroundColor = getRandomColor()
  return clone
}

const createTile = () => {
  const box = document.createElement('div')
  box.className = 'tile'
  document.querySelector('main').append(box)
  box.append(createType1())
  return box
}

const createGrid = (col, row) => {
  for (let y = 0; y < row; y += 1) {
    for (let x = 0; x < col; x+=1) {
      const tile = createTile()
      tile.style.left = `${x * 120}px`
      tile.style.top = `${y * 120}px`
    }
  }
}

createGrid(4, 3)