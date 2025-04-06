const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

    // basic port api make start>

app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('job is falling from sky');
})

app.listen(port,() =>{
    console.log(`job is waiting at:${port}`)
})