import express from 'express'
import {dao} from '../dao';

export const router = express.Router();


router.get('/api/products', (req, res) => {
  console.log('get items');
  dao.getItems()
    .then(data => {
      res
        .status(200)
        .end(JSON.stringify(data))})
    .catch(() => {
      res
        .status(404)
        .end('Something gone wrong')});
});

router.get('/api/products/:id', ({params: {id}}, res) => {
  console.log('get item ' + id);
  dao.getItem(+id)
    .then(data => {
      res
        .status(200)
        .json(data)})
    .catch(err => {
      res
        .status(404)
        .end(err)});
});

router.get('/api/products/:id/description', ({params: {id}}, res) => {
  console.log('get description' + id);
  dao.getItemDescription(+id)
    .then(data => {
      res
        .status(200)
        .json(data)
    })
    .catch(err => {
      res
        .status(404)
        .end(err)});
});

router.put('/api/products/:id', ({body, params: {id}}, res) => {
  dao.updateItem(+id, body)
    .then(data => {
      res
        .status(201)
        .json(data)
    })
    .catch(err => {
      res
        .status(404)
        .end(err)});
});

router.post('/api/products', ({body}, res) => {
  dao.addItem(body)
    .then((data) => {res.status(201).json(data) })
    .catch(() => {res.status(404).end('Something gone wrong')});
});

router.delete('/api/products/:id', ({params: {id}}, res) => {
  dao.deleteItem(+id)
    .then((data) => {res.status(201).json(data) })
    .catch(() => {res.status(404).end('Something gone wrong')});
});