console.log('js methods')

const obj = {
    helloKitty: function () {
        console.log('😸')
    },
    name: 'Dicky'
}





// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i])
// }

// let citiesWithI = []
// for (city of cities) {
//     if (city.includes('i')) {
//         citiesWithI.push(city)
//     }
// }

// cities.forEach(obj.helloKitty)



let cities = ['Chicago', 'berlin', 'miami', 'boston', 'dublin']

//Just a loop 
cities.forEach((city, i) => {
    //console.log(city.toUpperCase(), i)
})

//Loop returns a new copy 
let newBigCities = cities.map((city) => {
    return `Come visit ${city}!`
})

//Filter returns an array with specific criteria 
let cities_with_i = cities.filter((city) => {
    return city.includes('a') || city.includes('l')
})




let items = [
    { name: 'Macbook', price: 1300 },
    { name: 'Nike sneaks', price: 150 },
    { name: 'Supreme Merch', price: 5000 },
    { name: 'Tesla', price: 60000 }
]


let sum = 0
for (item of items) {
    sum += item.price
}


let sumAgain = items.reduce((acc, eachItem) => {
    return acc + eachItem.price
}, 0)

let numbers = [45, 23, 7, 199, 78787]


let sortedNumbers = numbers.sort((a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    if (a === b) {
        return 0
    }
})

// let sNum = numbers.sort((a, b) => b - a)

let sortCities = cities.sort((a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    if (a == b) {
        return 0
    }
})

let sCities = cities.sort((a, b) => {
    return a.localeCompare(b)
})

let sortItems = items.sort((a, b) => {
    console.log(a, b)
    return b.price - a.price
})

let sItems = items.sort((a, b) => {
    if (a.price < b.price) {
        return -1
    }
    if (a.price > b.price) {
        return 1
    }
    if (a.price === b.price) {
        return 0
    }
})