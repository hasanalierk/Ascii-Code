// const bodyy = document.querySelector(`body`)

// bodyy.style.backgroundColor = `red`

const div1 = document.getElementById(`div1`)
const div2 = document.getElementById(`div2`)
const p1 = document.getElementById(`p1`)
const p2 = document.getElementById(`p2`)
const div2p1 = document.getElementById(`div2-p1`)
const div2p2 = document.getElementById(`div2-p2`)



div1.style.width = `200px`
div1.style.height = `150px`
div1.style.backgroundColor = `yellow`
div1.style.margin = `auto`
div1.style.textAlign = `center`
div1.style.fontSize = `1.5rem`

div2.style.width = `200px`
div2.style.height = `200px`
div2.style.backgroundColor = `tomato`
div2.style.margin = `auto`

div2p1.style.textAlign = `center`
div2p1.style.fontSize = `2rem`

document.addEventListener(`keydown`,(e) => {
   document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
   p2.innerText = ` ` +  e.key.toUpperCase()
})

document.addEventListener(`keydown`,(e) => {
    div2.style.fontSize = `2rem`
    div2.style.textAlign = `center`
    div2p2.innerText = e.keyCode
})