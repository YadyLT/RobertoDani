import {Component, inject} from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {ApiResultListPokemonTCG, PokemonCard} from "../common/interfacesPokemonTCG";
import {RouterLink} from "@angular/router";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-lista-pokemons',
  standalone: true,
  imports: [
    RouterLink,
    NgbPagination
  ],
  templateUrl: './lista-pokemons.component.html',
  styleUrl: './lista-pokemons.component.css'
})
export class ListaPokemonsComponent  {
  //Definimos las variables, en este caso:
  // un array con la colección de cartas que devuelve la api
  //un objeto donde está toda la información de la api
  //y el número de página para la paginación
  pokemons: PokemonCard [] = [];
  dataApi!: ApiResultListPokemonTCG;
  page = 1;


  //Inyectamos el servicio para poder usarlo y así acceder a sus funciones.
  private pokemonService: PokemonService = inject(PokemonService);

  //Aquí se define el constructor con la función que necesitamos.
  constructor() {
    this.loadPokemons();
  }

  //La función es la que ser encarga de llamar al servicio y suscribirse al observable que devuelve la función del servicio
  //Ese observable tiene 3 resultados, que vaya bien: next, que vaya mal: error, que ha terminado: complete
  loadPokemons() {
    this.pokemonService.getPokemons(this.page).subscribe(
      {
        //en el next es donde recogemos la respuesta de la Api
        next: (value: ApiResultListPokemonTCG) => {
          this.dataApi = value;//Aquí guardamos la información de la Api para la paginación.
          this.pokemons = value.data;//Aquí se guarda el array de cartas que está dentro del
          //objeto data que está dentro de la respuesta de la api.


        },
        error: (error) => {
          console.error(error);
        }, complete: () => {
          console.log('Load Pokemon Completed');
        }
      }
    )
  }


}

interface CardPosition {
  offsetX: number;
  offsetY: number;
}





