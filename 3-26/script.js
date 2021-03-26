

// let header = document.querySelector('h1')

// header.style.color = 'blue'

// //document.querySelector('h1').style.color = 'orange'

// document.querySelector('p').style.color = 'red'

// document.querySelector('p').innerHTML += '!!!'


let row = document.querySelector('.spanish')
row.querySelector('p').innerHTML += '!!!'

// document.querySelector('div.greeting.italian p').innerHTML += '!!!!'


//document.querySelector('.spanish').classList.toggle('active')


document.querySelector('h1').onclick = function (event) {
    //console.log(event, this)
    this.classList.toggle('special')

    //event.target.classList.toggle('special') ALSO GOOD 

    //document.querySelector('h1').classList.toggle('special') ALSO GOOD
}


/**BRUTE FORCE */
// document.querySelector('.english').onclick = function (e) {
//     this.classList.toggle('active')
// }

// document.querySelector('.spanish').onclick = function (e) {
//     this.classList.toggle('active')
// }

// document.querySelector('.italian').onclick = function (e) {
//     this.classList.toggle('active')
// }

function wireUpGreetings() {

    let allGreetings = document.querySelectorAll('.greeting ');

    for (let greeting of allGreetings) {
        greeting.onclick = function (e) {
            this.classList.toggle('active')
        }
    }
}

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault()
    console.log(this, event)
    console.log(event.target[0].value)
    console.log(document.querySelector('input').value)
    console.log(this.querySelector('input').value)
    document.querySelector('main').innerHTML += `<div class="greeting"><p>${event.target[0].value} Friday 🤪</p></div>`
    wireUpGreetings()
}


wireUpGreetings() //Calls it at beginning

