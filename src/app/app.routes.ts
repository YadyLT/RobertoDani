import { Routes } from '@angular/router';
import { CarrucelComponent } from './component/carrucel/carrucel.component';
import {ListaPokemonsComponent} from "./component/Yady/lista-pokemons/lista-pokemons.component";
import {PokemonDetalleComponent} from "./component/Yady/pokemon-detalle/pokemon-detalle.component";

export const routes: Routes = [
    {path: 'carrucel' ,component:CarrucelComponent },
    {path: 'yady' ,component:ListaPokemonsComponent },
    {path: 'yady/detalle/:id' ,component:PokemonDetalleComponent }

];
