const express = require('express');

const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3003;

const db = require('../db/index.js');

app.use(compression());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/images', (req, res) => {
  const { id } = req.query;
  console.log('inside get', id)
  // Get data from database
  db.getProductImages(id, (err, results) => {
    if (err) {
      console.log('Query error: ', err);
    }
    const data = { name: results[0][0].name };
    const imgArray = results[1].map((x) => (
      {
        small: x.img_small,
        large: x.img_large,
        zoom: x.img_zoom,
      }
    ));
    data.images = imgArray;
    console.log(data);
    res.status(200).send(data);
  });
});


app.post('/images', (req, res) => {
  const { id } = req.query;
  //add db code to add item

});

app.put('/images', (req, res) => {
  const { id } = req.query;

});

app.delete('/images', (req, res) => {
  const id = req.query.prod_id;
  console.log(id);
  db.deleteItem(id, (err, result) => {
    if (err) {
      console.log('Error while deleting', err)
    } else {
      res.send(result)
    }
  })

});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
