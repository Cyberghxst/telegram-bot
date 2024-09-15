import { ClientOptions, TelegramClient } from 'telegramsjs'

/**
 * Represents the telegram bot.
 */
export class Client extends TelegramClient {
    constructor(options: ClientOptions & { token: string }) {
        super(options.token, options)
    }
}