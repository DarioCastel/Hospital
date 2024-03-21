const mongoose = require ("mongoose");

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect('mongodb+srv://lecastelnovo:OZf8XdHBmRbw6zcg@cluster0.44m8ckk.mongodb.net/hospital');
        console.log(`Database Connected ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}


module.exports = connectDB