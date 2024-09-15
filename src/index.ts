import { Client } from './classes/structures/Client'
import { config } from 'dotenv'

config()
const client = new Client({
    errorHandler: true,
    token: `${process.env.TOKEN}`
})