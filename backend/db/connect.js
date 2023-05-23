const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const mongoURI = 'mongodb://127.0.0.1:27017/notes-app'

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoURI);
}
console.log("Connection is Successful");
