const canvas = document.querySelector(`#myCanvas`)
canvas.width = window.innerWidth
canvas.height = window.innerHeight
const ctx = canvas.getContext("2d")


//x, y,  w,  h
// ctx.fillRect(10, 10, 20, 20)

ctx.fillStyle = 'red'

ctx.fillRect(100, 0, 30, 100)

ctx.fillStyle = 'rgb(0,0,255)'

ctx.fillRect(200, 10, 20, 40)

ctx.fillStyle = 'green'

ctx.fillRect(canvas.width - 50, 0, 50, 50)




let hero = {
    x: 20,
    y: 20,
    h: 20,
    w: 20,
    color: 'purple',
    draw: function () {
        // if (hero.x > canvas.width) { // Lets him run around horizontally 
        //     hero.x = -20
        // }
        // if (hero.y < 50) { //Imaginary wall 
        //     hero.y = 50
        // }
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.h, this.w)
    }
}


// let badGuy = {
//     x: 370,
//     y: 70,
//     h: 70,
//     w: 70,
//     color: 'silver',
//     draw: function () {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.h, this.w)
//     },
//     move: function () {
//         this.x--;
//         // this.x = Math.random() * canvas.width
//         // this.y = Math.random() * canvas.height
//     }
// }


// let badGuy2 = {
//     x: 390,
//     y: 170,
//     h: 70,
//     w: 70,
//     color: 'gold',
//     draw: function () {
//         ctx.fillStyle = this.color
//         ctx.fillRect(this.x, this.y, this.h, this.w)
//     },
//     move: function () {
//         this.x--;
//         // this.x = Math.random() * canvas.width
//         // this.y = Math.random() * canvas.height
//     }
// }


class BadGuy {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}`

    }
    draw = () => {
        ctx.fillStyle = this.color
        //ctx.fillRect(this.x, this.y, this.h, this.w)
        ctx.drawImage(img, this.x, this.y, this.h, this.w)
    }
    move = () => {
        this.x -= 5;
        this.w += 1;
        this.h += 1;
        // this.x = Math.random() * canvas.width
        // this.y = Math.random() * canvas.height
    }
}


setInterval(function () {
    badGuys.push(new BadGuy(canvas.width, Math.random() * canvas.height, 50, 50))
    score += 1
}, 1000)

let badGuys = []

function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        // collision detected!
        console.log("COLLISION")
        cancelAnimationFrame(gameInt)
        alert("GAME OVER")
    }
}


let gameInt = null
let score = 0;
function animate() { //Your rendering engine 
    gameInt = requestAnimationFrame(animate) //Infinte loop
    ctx.clearRect(0, 0, canvas.width, canvas.height) //Flip to a new page >> clear canvas


    //if (score % 5 === 0) {
    //score++
    //}
    ctx.fillText(score, 10, 10, 200, 00)
    //}
    hero.draw()
    // badGuy.move()
    // badGuy.draw()
    // badGuy2.move()
    // badGuy2.draw()
    badGuys.forEach(eachBadGuy => {
        eachBadGuy.move()
        eachBadGuy.draw()
        detectCollision(hero, eachBadGuy)
    })

    // detectCollision(hero, badGuy)
    // detectCollision(hero, badGuy2)
}

animate()

let img = new Image()
img.src = 'img.jpg'
img.onload = function () {
    ctx.drawImage(img, 100, 100, 150, 150)
}



window.onkeydown = function (e) {
    console.log(e.key)
    if (e.key === 'ArrowLeft') {
        hero.x -= 15
    }
    if (e.key === 'ArrowRight') {
        hero.x += 15
    }
    if (e.key === 'ArrowUp') {
        hero.y -= 15
    }
    if (e.key === 'ArrowDown') {
        hero.y += 15
    }
}

