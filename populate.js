require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')


const start = async (req, res) =>{
    try {
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany()  // deletes any existing entries in the products collection
        await Product.create(jsonProducts)  // we pass in an array of objects, and each object is added to the collection
        console.log('Success')
        process.exit(0) //code 0 means, everything went well
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()