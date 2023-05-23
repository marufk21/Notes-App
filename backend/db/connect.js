const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

DATABASE =
  "mongodb+srv://marufkhan2002:maruf%40456@cluster0.ysaeeyb.mongodb.net/?retryWrites=true&w=majority";
const DB = process.env.DATABASE;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}
console.log("Connection is Successful");
