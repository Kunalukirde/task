const mongoose = require('mongoose');

DBName = 'pandozatask';

const DBConnect = async (DATABASE_URL,DBName) => {
        await mongoose.connect(DATABASE_URL,DBName).then(()=> {console.log('MongoDB connected')}).catch((error) => {console.log('Error Connecting to DB...', error)})
};

module.exports = DBConnect;