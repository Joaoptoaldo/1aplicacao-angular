import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
export const routes: Routes = [
    // Definimos que o caminho 'contato' chama o Componente Contato
    { path: 'contato', component: Contato }
];