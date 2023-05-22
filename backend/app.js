const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
require("./db/connect");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(PORT, () => {
  console.log(`Notes app listening on PORT ${PORT}`);
});
