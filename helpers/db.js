const mongoose = require("mongoose");
module.exports = () =>
{
    mongoose.connect(
        "mongodb+srv://Ubade:UbD1436MeRt1453@cluster0.yakmw.mongodb.net/movieappapi?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
      );
      
      const db = mongoose.connection;
      db.on('error', console.error.bind(console, 'connection error:'));
      db.on('open', function() {  console.log("we're connected!");});
}