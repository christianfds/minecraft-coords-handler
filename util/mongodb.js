import { MongoClient } from 'mongodb'

const { DB_URI, DB_NAME } = process.env

if (!DB_URI) {
  throw new Error(
    'Please define the DB_URI environment variable inside .env.local'
  )
}

if (!DB_NAME) {
  throw new Error(
    'Please define the DB_NAME environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(DB_URI, opts).then((client) => {
      return {
        client,
        db: client.db(DB_NAME),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}