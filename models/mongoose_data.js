var mongoose = require('mongoose');

var mongoDB =var mongoDB = 'mongodb://127.0.0.1/blog';
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const postSchema = new mongoose.Schema({
      post: {
        type: String,
        required: true,
        trim: true
      },
      
    });
    