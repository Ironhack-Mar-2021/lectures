
function stringsNumberCoditionals() {
    let cookie = 'chocolate chip'

    const dozen = 12

    cookie = 'peanut butter'

    let cookiesAreGood = true

    let eater = 'David'


    // console.log(cookiesAreGood, typeof cookiesAreGood)

    if (false || true && cookiesAreGood && eater != "Juan") {
        return `YUMM! NOM NOM 🍪 ${eater} has eaten a  ${dozen}  ${cookie}`
    }

}

function theseAreArrays() {

    //examples of falsey include: 0, null, undefined, '' 
    //example of truthy include: Anythign not falsely 

    let items = ['pineapple', "flour", 4545, `great question`]

    items[0] = 'watermelon'

    items.push(`pizza`)

    items.unshift('mango')

    items.pop()

    items.shift()

    return items
}

// console.log(items, typeof items)

// for (let i = 0; i < items.length; i++) {
//     console.log('=-=-=-=-')
//     console.log(items[0])
// }

// for (let item of items) {
//     console.log(item)
// }


function thisIsAnObject() {
    let athlete = {
        name: 'Lebron',
        sport: 'Basketball'
    }

    athlete.age = 36  //Dot Notation

    athlete.greatest = true
    for (let key in athlete) {
        //console.log(key, athlete[key]) //Bracket Notation
    }
    athlete.name = "Jordan"

    delete athlete.greatest

    return athlete
}



// let myAthlete = thisIsAnObject()

// console.log(myAthlete)











function thisisMyFunction(dog, cat) {
    // console.log('Hurray!', dog, cat)
}


// thisisMyFunction('bernadoodle', 'calico')



// const thisIsAnotherWay = () => {
//     console.log('Whoo hooo!')
// }


// thisIsAnotherWay()

