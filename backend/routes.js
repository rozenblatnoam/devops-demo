const express = require('express');
const router = express.Router();


// Simple in-memory items
let items = [
{ id: 1, name: 'Temperature sensor', value: '22.4 C' },
{ id: 2, name: 'Soil moisture', value: '48%' }
];


router.get('/items', (req, res) => {
res.json(items);
});


router.post('/items', (req, res) => {
const { name, value } = req.body;
const id = items.length ? items[items.length - 1].id + 1 : 1;
const item = { id, name, value };
items.push(item);
res.status(201).json(item);
});


module.exports = router;