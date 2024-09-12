import { Container } from "../classes/structures/Container"
import { Client } from "../classes/structures/Client"
import { Command } from "../decorators/Command"

export class Ping extends Container<Client> {
    @Command({
        name: /ping/,
        description: 'Sends a ping response from the triggered command.'
    })
    async x(ctx: unknown) {}
}