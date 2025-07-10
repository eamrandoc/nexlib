import dotenv from 'dotenv'

dotenv.config()

if (!process.env.PORT || !process.env.DATABASE) {
  throw new Error("❌ Missing required environment variables: PORT or DATABASE");
}
export default {
    PORT:process.env.PORT,
    DATABASE:process.env.DATABASE
}