import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrucelComponent } from './component/carrucel/carrucel.component';
import {NavbarComponent} from "./component/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrucelComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
}
