const express = require('express');
const cors = require('cors');
const app = express();
      //from .env start
  require('dotenv').config(); 
      //from .env  end
const port = process.env.PORT || 3000;

 const { MongoClient, ServerApiVersion } = require('mongodb');

    // basic port api make start>

app.use(cors());
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('job is falling from sky');
})

app.listen(port,() =>{
    console.log(`job is waiting at:${port}`)
});
   // basic port api make end>

   // mongo connect start>>>

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.i5ort.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  //  jobs related apis start>
  const applicationCollection = client.db('jobAplication').collection('aplications');

  app.get('/aplications', async(req,res)=>{
    const cursor = applicationCollection.find();
    const result = await cursor.toArray();
    res.send(result);
  });
  app.get('/aplications/:id',async(req,res)=>{
    const id = req.params.id;
    const query ={_id:new Object(id)};
    const result = await applicationCollection.findOne(query);
    res.send(result);
  })


  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

    // mongo connect end>>>
