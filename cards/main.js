const getRandomClassName = () => {
  const r = Math.random()

  // 20% de chance de Silver
  if (r < 0.2) {return 'silver'}

  // 10% (30-20) de chance de gold
  if (r < 0.3) {return 'gold'}

  // dans tout les cas rien
  return 'normal'
}

const getRandomEmoji = () => {
  const r = Math.random()
  if (r < 0.5) {return '🔥'}
  
  return '🐉'
}

const clone = (source) => {
  const clone = source.cloneNode(true)
  document.body.append (clone)

  const x = Math.round(Math.random() * window.innerWidth)
  const y = Math.round(Math.random() * window.innerHeight)
  clone.style.left = x + 'px'
  clone.style.top = y + 'px'
  const angle = Math.round(Math.random() * 360)
  clone.style.transform = `rotate(${angle}deg)`

  const randomClass = getRandomClassName ()
  clone.className = `card ${randomClass}`

  clone.querySelector('div').innerHTML = getRandomEmoji()
}

const CloneOnClick = (event) => {
  //console.log(event.currentTarget)
  const source = event.currentTarget
  clone (source)
}

const destroyCard = (event) => {
  //clone.log(envent.currentTarget)
  const card = event.currentTarget.parentElement
  //control.log(card)
  card.remove()
  event.stopPropagation()
}

window.onkeydown = (event) => {
  //consol.log(event.code)
  if (event.code === 'Space') {}
  const source = document.querySelector('div.card')
  clone (source)
}