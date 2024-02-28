const mongoose = require('mongoose');
const connect = async()=> {
    const URI = process.env.MONGO_URI
    try {
        await mongoose.connect(URI, {

        });
        console.log('Connect DB Successfully')
     } catch (error) {
        console.log('Connect DB Failure: ', error)
    }
}

module.exports = {connect}
