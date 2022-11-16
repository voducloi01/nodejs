const port = 3000;
const morgan = require("morgan");
const express = require("express");
const route = require('./routes')

const { engine } = require("express-handlebars");

var path = require("path");

const app = express();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));


route(app) ; 



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
