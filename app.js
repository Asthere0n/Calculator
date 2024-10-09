//Initial state of the calculator
let currentScreen = document.querySelector('#screen').value.split('')
console.log(currentScreen)
let numberInMemory = 0

//Function that will transform the array and print in screen as string 
const writeInScreen = function (array) {
    currentScreen = array
    document.querySelector('#screen').value = array.join('')
}

//Functionality of Reset button
document.querySelector('#buttonReset').addEventListener('click', () => {
    console.log('Reset')
    writeInScreen([])
})

//functionality of C button
document.querySelector('#buttonDelete').addEventListener('click', () => {
    console.log('Delete')
    currentScreen.pop()
    writeInScreen(currentScreen)
})

//Numeric pad
const numPad = document.querySelectorAll('.buttonNum')
numPad.forEach((numButton)=>{
    numButton.addEventListener('click', ()=>{
        console.log(numButton.value)
        currentScreen.push(numButton.value)
        writeInScreen(currentScreen)
    })
}) 