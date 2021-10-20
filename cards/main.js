const clone = (source) => {
    const clone = source.cloneNode(true)
    document.body.append (clone)

    const x = Math.round(Math.random() * window.innerWidth)
    const y = Math.round(Math.random() * window.innerWidth)
    clone.style.left = x + 'px'
    clone.style.top = y + 'px'
    const angle = Math.round(Math.random() * 60)
    clone.style.transform = `rotate(${angle}deg)`
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