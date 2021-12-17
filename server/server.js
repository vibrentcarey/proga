const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { removeDuplicates, generateRandomArray } = require('./utility');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.get('/', (_, res) => {
  const poses = JSON.parse(fs.readFileSync('./poses.json'));
  const randomPoses = generateRandomArray(poses);
  const uniquePoses = removeDuplicates(randomPoses);
  res.status(200).json(uniquePoses);
})

app.post('/specific', (req, res) => {
  const bodyPart = req.body.bodyPart;
  const level = req.body.level;
  const poses = JSON.parse(fs.readFileSync('./poses.json'));
  const filteredPoses = poses.filter(pose => pose.bodyPart.includes(bodyPart) && pose.level === level);
  const randomPoses = generateRandomArray(filteredPoses);
  const uniquePoses = removeDuplicates(randomPoses);
  res.status(200).json(uniquePoses)
})

app.listen(8080, () => {
  console.log('Listening on 8080');
})