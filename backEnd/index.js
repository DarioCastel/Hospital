const express =  require ("express")
const app = express()
const PORT = process.env.PORT || 3001
const connectBD = require ("./connectBd")
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectBD()
app.use("/api",require("./routes"))
app.get("/",(req,res)=>{res.json("bienvenido al servidor")})
app.get("*",(req,res)=>{res.sendStatus("404")})
app.listen(PORT,()=>{console.log(`Server is runnig on port: ${PORT}`);})


    app.listen(3000, ()=>{
        console.log("server running on 3000")
    })

