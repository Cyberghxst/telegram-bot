import { DecoratorType } from "../types/enums"

/**
 * Object that holds the basic information of a command.
 */
export interface IBaseCommand {
    name: string | string[] | RegExp
    description: string
}

/**
 * Creates a command.
 * @param options 
 * @returns 
 */
export function Command(options: IBaseCommand) {
    return function(target: any, key: any, descriptor: PropertyDescriptor) {
        // Create the descriptor object.
        if (!descriptor.value) descriptor.value = {};
        // Assign the command data.
        Object.assign(descriptor.value, {
            moduleType: DecoratorType.Command,
            ...options
        })

    }
}