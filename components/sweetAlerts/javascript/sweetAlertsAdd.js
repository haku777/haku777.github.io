
Swal.fire(
		  'sweetAlerts',
		  'y ahora que?',
		  'question'
		)

function loadImagen(){

	Swal.fire({
	  imageUrl: 'img/flowers.jpg',
	  imageHeight: 300,
	  imageAlt: 'A tall image'
	})
}


function loadPage(){
	let timerInterval
Swal.fire({
  title: 'Pre Load jeje :)',
  html: 'UWU <b></b> milliseconds.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      const content = Swal.getContent()
      if (content) {
        const b = content.querySelector('b')
        if (b) {
          b.textContent = Swal.getTimerLeft()
        }
      }
    }, 10)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

}


async function loadColor(){
/* inputOptions can be an object or Promise */
const inputOptions = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      '#ff0000': 'Red',
      '#00ff00': 'Green',
      '#0000ff': 'Blue'
    })
  }, 1000)
});

const { value: color } = await Swal.fire({
  title: 'Select color',
  input: 'radio',
  inputOptions: inputOptions,
  inputValidator: (value) => {
    if (!value) {
      return 'You need to choose something!'
    }
  }
})

if (color) {
  Swal.fire({ html: `You selected: ${color}` })
	}
};














