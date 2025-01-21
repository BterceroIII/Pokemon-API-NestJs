export class PokemonResponseDto {
    name: string;
    no: number;

    constructor(pokemon: any) {
        this.name = pokemon.name;
        this.no = pokemon.no;
    }
}