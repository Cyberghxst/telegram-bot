/**
 * Represents a module container.
 */
export abstract class Container<Client> {
    /**
     * Commands that this container will store.
     */
    private commands: unknown[] = []

    /**
     * Container constructor.
     * @param client
     */
    constructor(public client: Client) {}

    /**
     * Returns the array of cached commands in this container.
     * @returns {unknown[]}
     */
    public getCommands() {
        return this.commands
    }
}