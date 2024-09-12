import { Client } from '../structures/Client'

/**
 * All options an event handler can accept.
 */
export interface IEventHandlerOptions<T extends Record<string, any> = Record<string, any>, K extends keyof T = keyof T> {
    name: K
    listener(this: Client, ...args: Parameters<T[K]>): Promise<any>
}

export class BaseEventHandler<T extends Record<string, any> = Record<string, any>, K extends keyof T = keyof T> implements IEventHandlerOptions<T, K> {
    /**
     * Event handler constructor.
     * @param {IEventHandlerOptions<T extends Record<string, any> = Record<string, any>, K extends keyof T = keyof T>} options 
     */
    constructor(private options: IEventHandlerOptions<T, K>) {}

    /**
     * Returns the name of this event handler.
     */
    public get name() {
        return this.options.name
    }

    /**
     * Returns the listener of this event handler.
     */
    public get listener() {
        return this.options.listener
    }
}