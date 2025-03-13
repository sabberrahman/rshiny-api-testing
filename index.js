import express from "express";
import cors from "cors"

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors())


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
