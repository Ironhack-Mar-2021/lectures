// let animal = {
//     name: 'Lion',
//     weight: 500,
//     eat: function () {
//         console.log(`Nom Nom ${this.name} is hungry!`)
//         this.weight += 10
//     }
// }


// let animal2 = {
//     name: 'Pelican',
//     weight: 10,
//     eat: function () {
//         console.log(`Nom Nom ${this.name} is hungry!`)
//         this.weight += 1
//     }
// }
let cham = `_       _._
_,,-''' ''-,_ }'._''.,_.=._
,-'      _ _    '        (  @)'-,
,'  _..==;;::_::'-     __..----'''}
:  .'::_;==''       ,'',: : : '' '}
}  '::-'            /   },: : : :_,'
:  :'     _..,,_    '., '._-,,,--\'    _
:  ;   .-'       :      '-, ';,__\.\_.-'
{   '  :    _,,,   :__,,--::',,}___}^}_.-'
}        _,'__''',  ;_.-''_.-'
:      ,':-''  ';, ;  ;_..-'
_.-' }    ,',' ,''',  : ^^
_.-''{    { ; ; ,', '  :
}   } :  ;_,' ;  }
{   ',',___,'   '
',           ,'
'-,,__,,-'`




class Animal {
    constructor(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
    eat = (food) => {
        this.weight += food
        console.log(`I now weigh ${this.weight}`)
    }
    sleep = () => {
        console.log(`ZZZZZZZZ ${this.name} is snoozing`)
    }

    draw = () => {
        document.querySelector(`#${this.name}`)?.remove()
        document.querySelector('main').innerHTML += `<div id=${this.name} style=background:${this.color}>${this.name}</div>`
    }
}

let mufasa = new Animal('lion', 500, 'gold');
let pelly = new Animal('pelican', 10, 'gray')
let fido = new Animal('dog', 20, 'brown')



class Chameleon extends Animal {
    constructor(name, weight, color) {
        super(name, weight, color)

    }

    draw = () => {
        document.querySelector(`#${this.name}`)?.remove()
        document.querySelector('main').innerHTML +=
            `<pre id=${this.name} style=background:${this.color}>${this.name} <br/>${cham}</pre>`

    }
    morphColor = () => {
        this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        this.draw()
    }
}

let gordon = new Chameleon('chameleon', .2, 'green')

mufasa.draw()
pelly.draw()
fido.draw()
gordon.draw()

gordon.morphColor()


