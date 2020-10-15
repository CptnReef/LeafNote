// The headline element
const display = document.querySelector('#display')
// The input field for size
const inputSize = document.querySelector('#input-size')
const inputFamily = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const inputBgColor = document.querySelector('#input-bg-color')
const inputText = document.querySelector('#enter_text')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showBgColor = document.querySelector('#show-bg-color')
const showText = document.querySelector('#display')
// Repeat this for the input and "show" elements

inputSize.addEventListener('input', handleInput)
inputFamily.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
inputText.addEventListener('input', handleInput)

function handleInput() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	const fontFamily = inputFamily.value
	const color = inputColor.value
    const background_color = inputBgColor.value
    const text_box = inputText.value
	// Set the style 
	display.style.fontSize = fontSize
	display.style.fontFamily = fontFamily
	display.style.color = color
    display.style.background_color = background_color
    display.style.text_box = text_box
	// Show the size
	showSize.innerHTML = fontSize
	showFont.innerHTML = fontFamily
	showColor.innerHTML = color
    showBgColor.innerHTML = background_color
    showText.innerHTML = text_box
}