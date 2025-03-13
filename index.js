import express from "express";
import cors from "cors"
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;


app.use(express.json({ limit: '10mb' }));
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' })); 

let storedData = null; 

app.post("/data", (req, res) => {
  storedData = req.body;

  console.log("Received Data:", storedData);
  
  res.status(200).send("Data received successfully!");
});

app.get("/api_rds", (req,res)=>{
  if (storedData) {
    res.json(storedData); 
  } else {
    res.status(404).send("No data available.");
  }
})

app.get("/", (req,res)=>{
    res.send("server is running")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
