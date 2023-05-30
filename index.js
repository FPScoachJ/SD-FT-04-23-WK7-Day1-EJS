const express = require("express");
const app = express();
const PORT = 3001;
const user = require("./routes/user");
const dashboard = require("./routes/dashboard");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/partials"));
app.use(express.static(__dirname + "/public/css"));


app.use("/user", user);
app.use("/dashboard", dashboard);

app.listen(PORT, console.log(`listening on port ${PORT}`) )