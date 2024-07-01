import { connect,set } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const connectDB = async () => {
  try {
    set("strictQuery", false);
    // await connect(process.env.MONGODB_CONNECTION ?? '')
    await connect('mongodb+srv://radulito19:2219230slyt@ticketadmin.qjxx4qa.mongodb.net/ali')
      .then(db => console.log('Database is connected'))
      .catch(err => console.log(err))

  } catch (error) {
    console.log(error)
  }

}

connectDB()