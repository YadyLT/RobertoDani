import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrucelComponent } from './component/carrucel/carrucel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrucelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
}
