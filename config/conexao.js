const mongoose = require('mongoose')
const uri = "mongodb+srv://paola:paola@cluster0.gq0ue.mongodb.net/test"

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

module.exports = mongoose