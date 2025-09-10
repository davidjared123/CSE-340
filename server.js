/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
app.use(expressLayouts)

/* ***********************
 * Routes
 *************************/
app.set("view engine", "ejs")
app.set("layout", "layouts/layout") // layout relativo a la carpeta views

// Rutas primero
app.get("/", function(req, res){
  res.render("index", {title: "Home"})
})

// Archivos estáticos después
app.use(static)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})

