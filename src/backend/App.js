const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

const tvshowList = require('./tvshow-list.json');

app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.get('/rest/shows', (req, res) => res.send(tvshowList))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
