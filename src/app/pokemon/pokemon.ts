export class Pokemon{
    id: number;
    name: string;
    types = [];
    stats = [];
    moves = [];
    url: string
    sprite: string;

    getTypes() {
        return this.types;
    }
    getMoves() {
        return this.moves;
    }
    getStats() {
        return this.stats;
    }
}