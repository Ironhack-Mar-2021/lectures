const mongoose = require('mongoose')
const Cat = require('./models/Cat.js')

mongoose
    .connect(`mongodb+srv://niko:nikoniko@cluster0.k13bi.mongodb.net/mongooseVsCobra?retryWrites=true&w=majority`, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

// When successfully connected
mongoose.connection.on('connected', () => console.log('Mongoose default connection open'));

// If the connection throws an error
mongoose.connection.on('error', err => console.log(`Mongoose default connection error: ${err}`));

// When the connection is disconnected
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'));

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});


const kitty = new Cat({ name: 'new old Cat', age: 13434, favFoods: ['meow mix', 'kibble', 'fish', 'lasagna', 5456] });


// kitty
//     .save()
//     .then(newCat => console.log(`A new cat is created: ${newCat}!`))
//     .catch(err => console.log(`Error while creating a new cat: ${err}`));

// { field: { $in: [<value1>, <value2>, ... <valueN> ] } }


// Cat.find({ favFoods: { $in: ['pea soup'] } }).then(res => console.log(res))

//Cat.deleteMany().then(res => console.log(res))

let cats = [
    { name: 'Dicky', color: 'black', favFoods: ['Mice', 'Jerry'] },
    { name: 'Juan', color: 'grey', favFoods: ['Rice', 'Chicken'] },
    { name: 'Daniela', color: 'white', favFoods: ['Lasagna'] }
]


Cat.insertMany(cats).then(res => console.log(res))
// Cat.updateMany({}, { age: 3 }).then(res => console.log(res))

// Cat.updateOne({ name: "Juan" }, { $push: { favFoods: ['frejoles'] } }).then(res => console.log(res))

// Cat.findByIdAndDelete('6091665f9815a27ecd53f288').then(res => console.log(res))

