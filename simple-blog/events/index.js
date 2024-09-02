const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const events = [];

app.post('/events',  (req, res) => {
    const event = req.body;
    events.push(event);
    // POSTs SERVER
    axios.post("http://localhost:4000/events",  event, {data: {}}).catch((err) => {
        console.log(err.message);
      });;
    // COMMENTS SERVER
    axios.post("http://localhost:4001/events",  event, {data: {}}).catch((err) => {
        console.log(err.message);
      });;
    // QUERY SERVICE
    axios.post("http://localhost:4002/events",  event, {data: {}}).catch((err) => {
        console.log(err.message);
      });;
    // MODERATE SERVICE
    axios.post("http://localhost:4003/events",  event, {data: {}}).catch((err) => {
        console.log(err.message);
      });; 

      res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
    res.send(events);
  });
  
app.listen(4005, () =>{
    console.log('listening on 4005');
})
