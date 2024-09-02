const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.post('/events', async (req, res) => {
    const {type, data} = req.body;
    if(type === 'COMMENT_CREATED') {
        const {id, content, postId} = data;
        const status = content.includes('orange') ? 'approved' : 'rejected';
        await axios.post("http://localhost:4005/events", {
            type: "COMMENT_MODERATED",
            data: {
              id,
              content,
              postId,
              status
            },
          });
    }
    res.send({});
 
});

app.listen(4003, () => {
    console.log('listening on port 4003');
})