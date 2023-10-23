mongoose = require('mongoose');

const connectDBs = async () => {
    try {
        await mongoose.connect('mongodb://helpmeplz:public_static_void_main_string_args@db:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDBs;