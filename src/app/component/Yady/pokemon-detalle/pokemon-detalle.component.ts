import {Component, Inject, inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {PokemonCard} from "../common/interfacesPokemonTCG";
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe} from "@angular/common";


type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};


@Component({
  selector: 'app-pokemon-detalle',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './pokemon-detalle.component.html',
  styleUrl: './pokemon-detalle.component.css'
})


export class PokemonDetalleComponent {
  //@ViewChild("chart") chart!: ChartComponent;
  pokemon!:PokemonCard;
  private pokemonService: PokemonService = inject(PokemonService);
  //El activate route básicamente es para leer la ruta y buscar los parámetros que tiene
  private ar: ActivatedRoute = inject(ActivatedRoute);
  @Inject(PLATFORM_ID) private platformId!: Object


  constructor() {
    this.loadPokemon();


  }



  private loadPokemon() {
    //Aquí se guarda en una variable 'id' el valor del parámetro 'id' de la ruta, que está definido en el archivo rutas
    //en la ruta de detalle con pokemon/:id
    const id = this.ar.snapshot.params['id'];
    this.pokemonService.getPokemon(id).subscribe(
      {
        next: value=> {
          //la información del pokemon está dentro del objeto data dentro de value: value.data
          this.pokemon =value.data;



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
