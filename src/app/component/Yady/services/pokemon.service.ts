import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApiResultListPokemonTCG, ApiResultOnePokemonTCG} from "../common/interfacesPokemonTCG";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
//Se define la parte base común de la ruta/url de la Api, en este caso, las tarjetas.
  private URI: string = 'https://api.pokemontcg.io/v2/cards/';
  //Inyecto el cliente HTTP que es el encargado de hacer las peticiones "get" a la api para traer la información
  private http: HttpClient = inject(HttpClient);

  //Función para traer todas las cartas de pokemon con paginación.
  //Para la paginación utilizamos la opción de query que nos da la Api con la variable "page"
  //Definimos el número de elementos por página a 20 con 'pageSize'.
  //La función devuelve un observable de la interfaz de datos de la respuesta de la api que está creada en la carpeta common
  getPokemons(page:number):Observable<ApiResultListPokemonTCG> {

    return this.http.get<ApiResultListPokemonTCG>(`${this.URI}?page=${page}&pageSize=20`);
  }
  //Función que devuelve una sola carta, pasándole el id de la carta
  getPokemon(id: string): Observable<ApiResultOnePokemonTCG> {

    return this.http.get<ApiResultOnePokemonTCG>(`${this.URI}${id}`);
  }


}
