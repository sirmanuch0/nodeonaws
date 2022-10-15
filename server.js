const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    res.send('Hello World');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("my server is running on port 3000");
});

const express = require('express');


 

