import { config } from "dotenv";
config()

export const PORT = process.env.PORT || '3080'
export const HOST = process.env.HOST || 'localhost'
export const USER = process.env.USER || 'root'
export const PASSWORD = process.env.PASSWORD || ''
export const DATABASE = process.env.DATABASE || 'bibilioteca'