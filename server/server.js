const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const poses = JSON.parse(fs.readFileSync('./poses.json'))

  const randomPoses = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * (poses.length ))
    randomPoses.push(poses[randomNumber])
  }
  // Sets don't allow duplicate values
  const set = new Set()
  const uniquePoses = randomPoses.filter(el => {
    // Checks if the set has an id already
    const duplicate = set.has(el.id);
    // Adds the id to the set
    set.add(el.id);
    // Will only add a value to the array if it doesn't belong to set
    return !duplicate;
  });
  res.json(uniquePoses)
})

app.listen(8080, () => {
  console.log('Listening on 8080');
})