// import mongoose from 'mongoose'
// declare global {
//    var mongoose: any // This must be a `var` and not a `let / const`
// }
// const MONGODB_URI = process.env.MONGODB_URI!

// if (!MONGODB_URI) {
//    throw new Error('Please define the MONGODB_URI environment variable')
// }

// let cached = global.mongoose

// if (!cached) {
//    cached = global.mongoose = { conn: null, promise: null }
// }

// async function dbConnect() {
//    if (cached.conn) return cached.conn

//    if (!cached.promise) {
//       cached.promise = mongoose.connect(MONGODB_URI, {
//          bufferCommands: false,
//       })
//    }
//    cached.conn = await cached.promise
//    return cached.conn
// }

// export default dbConnect

import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI!
export default async function dbConnect() {
   try {
      const { connection } = await mongoose.connect(MONGODB_URI as string)
      if (connection.readyState === 1) {
         return Promise.resolve(connection)
      }
   } catch (error) {
      console.error(error)
      return Promise.reject(error)
   }
}
