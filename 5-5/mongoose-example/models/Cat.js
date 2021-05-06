const mongoose = require('mongoose')
const Cat = mongoose.model('Cat', {
    name: String,
    age: Number,
    color: { type: String, default: 'orange' },
    favFoods: [String]
});

module.exports = Cat
// export default Cat