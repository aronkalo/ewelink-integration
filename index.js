const express = require('express')
const ewelink = require('ewelink-api');
const app = express()
const port = 3000
const apiKey = null;
const region = null;

app.get('/', async (req, res) => {
    const connection = new ewelink({
        email: 'kalo.aron@icloud.com',
        password: 'IQnuku12',
      });


      try {
        const region = await connection.getRegion();
        const auth = await connection.getCredentials();
        const devices = await connection.getDevices();
      } catch (error) {
        console.log(error);
        res.send(error)
      }

    res.send("OK")
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
})