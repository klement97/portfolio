export class Stack {
    items = []
    push = (element) => this.items.push(element)
    pop = () => this.items.pop()
    isempty = () => this.items.length === 0
    empty = () => (this.items.length = 0)
    size = () => this.items.length
}
