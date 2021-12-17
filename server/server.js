const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { removeDuplicates, generateRandomArray } = require('./utility')
const app = express();

app.get('/', (req, res) => {
  const poses = JSON.parse(fs.readFileSync('./poses.json'));
  const randomPoses = generateRandomArray(poses);
  const uniquePoses = removeDuplicates(randomPoses);
  res.status(200).json(uniquePoses);
})

app.listen(8080, () => {
  console.log('Listening on 8080');
})