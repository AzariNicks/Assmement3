const cl = (thing) => {console.log(thing)}
const ColorBtn = document.querySelector('#color')
const PlaceBtn = document.querySelector('#place')
const RitualBtn = document.querySelector('#ritual')





const YellColor = () => {alert(`My Favorite Color Is Red`)}
const YellPlace = () => {alert(`Im not sure i havent bben out much so NYC`)}
const YellRitual = () => {alert(`Streching in the morining`)}

ColorBtn.addEventListener('click' ,YellColor)
PlaceBtn.addEventListener('click' ,YellPlace)
RitualBtn.addEventListener('click' ,YellRitual)


