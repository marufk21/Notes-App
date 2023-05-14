const express = require("express");
const app = express();
const port = 5000;
var cors = require("cors");
require("./db/connect");

app.use(express.json());

app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Notes app listening on port ${port}`);
});
