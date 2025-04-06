const express = require('express ');
const corse = require('corse');
const app = express();
const port =process.env.PORT ||5000;


     // basic Api make start>>
app.use(corse());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('job flay in the world')
})
app.listen(port,()=>{
  console.log(`job is waiting at:${port}`)  
})
   // basic Api make end>>