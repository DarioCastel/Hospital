const express =  require ("express")
const app = express()
const PORT = process.env.PORT || 3000
const APIRoute = require("./routes/api")
app.use("/api",APIRoute)

app.get("/",(req,res)=>{res.json("bienvenido al servidor")})
app.get("*",(req,res)=>{res.sendStatus("404")})
app.listen(PORT,()=>{console.log(`Server is runnig on port: ${PORT}`);})


const dataBase = module.exports = ()=>{
    const conectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect( 'mongodb+srv://lecastelnovo:OZf8XdHBmRbw6zcg@cluster0.44m8ckk.mongodb.net/');
        console.log("Database coneccted succesfully");

    }catch(error){

    }

    app.listen(3000, ()=>{
        console.log("server running on 3000")
    })

}