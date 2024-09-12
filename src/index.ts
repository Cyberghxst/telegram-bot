import { Client } from './classes/structures/Client'
import { config } from 'dotenv'

config()
const client = new Client(process.env.TOKEN!, {
    errorHandler: true
})