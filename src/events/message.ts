import { TelegramEventHandler } from '../classes/handlers/TelegramEventHandler'
import { Events } from 'telegramsjs'

export default new TelegramEventHandler({
    name: Events.Message,
    async listener(message) {
        if (!message.chat) return;
        await message.chat.send("ok");
    }
})