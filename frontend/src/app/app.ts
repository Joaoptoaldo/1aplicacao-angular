import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // 1. Adicionamos o RouterLink aqui

@Component({
  selector: 'app-root',
  standalone: true, // Garante que é o modo moderno
  imports: [RouterOutlet, RouterLink], // 2. Registramos o RouterLink aqui para o HTML entender os links
  templateUrl: './app.html',
 // styleUrl: './app.css'
})

export class App {
  // Esse é o sinal que controla o título e que usamos no @if do HTML
  protected readonly title = signal('projeto19');
}