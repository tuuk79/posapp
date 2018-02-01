const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'dist')));

app.get('/hello', (req, res) => {
	// res.sendFile(path.join(__dirname, 'dist/index.html'));

	const url = 'mongodb://localhost:27017';

	var MongoClient = require('mongodb').MongoClient;

	MongoClient.connect(url, (err, client) => {
		if (err) {
			throw err;
		}

		const db = client.db('test');

		// const result = db.createCollection('products');

		var cursor = db.collection('myCollection').find();

		cursor.forEach((err, num) => {
			if (err) {
				return console.log(err);
			}
			console.log(num);
		});

		db.close();

	});
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});
