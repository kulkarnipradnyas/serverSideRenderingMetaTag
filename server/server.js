import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import cors from 'cors'
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";


const PORT = 3005;

const app = express();
const router = express.Router()
// Use the cors middleware with options
const corsOptions = {
  origin: "*",
}
app.use(cors(corsOptions));
app.use("/build", express.static("build"))

app.use((req, res, next) => {
  if (/\.js|\.css|\.png/.test(req.path)) {
    res.redirect("/build" + req.path)
  } else {
    next();
  }
})

app.use("/product", (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }

    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <App/>
      </StaticRouter>
    );

    res.write(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    res.write('<script>window.__INITIAL_DATA__ = {};</script>'); // this is for hydrating data on the client side
    return res.end();
   

  });
});
router.use(express.static(path.resolve(__dirname, '..', 'build')))
app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});

