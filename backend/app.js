// Carrega as variáveis de ambiente (arquivo .env)
require("dotenv").config();

var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

// Conexão ao banco de dados remoto
const connectDb = require("./config/database");
connectDb();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

/* Rotas da aplicação */
const eletronicosRoute = require("./routes/eletronicos");
app.use("/eletronicos", eletronicosRoute);
const perifericosRoute = require("./routes/perifericos");
app.use("/perifericos", perifericosRoute);

module.exports = app;
