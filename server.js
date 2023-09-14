const express = require("express");
const fs = require("fs");
const config = require("./config.json");
const app = express();

const port = config.port || 443;
const options = { key:  fs.readFileSync(config.key), cert: fs.readFileSync(config.cert) };

const https = require("https").Server(options, app);

app.use(express.static(__dirname));

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      res.redirect(`http://${req.hostname}${req.url}`)
    } else {
      next()
    }
  })

https.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});