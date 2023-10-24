const button = document.getElementById('button')
let img = null

function createImgElement() {
	img = document.createElement('img')
	img.src = ''
	document.body.appendChild(img)
}
createImgElement()


function apiCats() {
	fetch('https://aws.random.cat/meow')
		.then((response) => {
			return response.json()
		})
		.then((data) => {
			img.src = data.file
		})
}


button.addEventListener('click', apiCats)