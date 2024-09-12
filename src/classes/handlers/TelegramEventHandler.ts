import { BaseEventHandler } from './BaseEventHandler'
import { EventHandlers } from 'telegramsjs'

/**
 * Represents a telegram event handler.
 */
export class TelegramEventHandler<
    Events extends EventHandlers = EventHandlers,
    Name extends keyof Events = keyof Events
> extends BaseEventHandler<Events, Name> {}