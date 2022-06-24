const express = require('express');
const Thermostat = require('./thermostat')
const thermostat = new Thermostat();
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Good afternoon, Joe');
});

app.get('/temperature', (req, res) => {
  res.send(JSON.stringify(thermostat.getTemperature()));
})

app.post('/up', (req, res) => {
  thermostat.up();
})

app.post('/down', (req, res) => {
  thermostat.down();
})

app.post('/set-power-saving/:status', (req, res) => {
  let status = req.params.status.toString();
  thermostat.setPowerSavingMode(status);
})

app.delete('/temperature', (req, res) => {
  thermostat.reset();
})

app.get('/energy', (req, res) => {
  res.send(JSON.stringify(thermostat.getEnergyUsage()));
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);