

const cl = anythingatall => console.log(anythingatall)

console.log("hello world");



function handleSubmit() {
	
	
	alert('Form Successfully Submited');
}


let form = document.querySelector('#submitbutton');
console.log(form)
form.addEventListener('click', handleSubmit);

const CatPic = document.querySelector('#Catpic')
cl(CatPic)



const tellingyouthemouse = () => {
	alert('Your Hair or lack thereof looks great today')
}
CatPic.addEventListener('mouseover', tellingyouthemouse)