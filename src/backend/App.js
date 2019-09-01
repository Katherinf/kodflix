const express = require('express')
const app = express()
const port = 3000

var tvshowList = require('./tvshow-list.json');

app.get('/rest/shows', (req, res) => res.send(tvshowList))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
