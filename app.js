const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const port = 3000;
const indexRouter = require("./routes/index");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
