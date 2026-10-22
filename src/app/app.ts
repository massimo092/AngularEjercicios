import { Component } from '@angular/core';
import { FechaYHora } from './fecha-yhora/fecha-yhora';

@Component({
  selector: 'app-root',
  imports: [FechaYHora],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
