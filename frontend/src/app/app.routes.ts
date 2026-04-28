import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Contato } from './contato/contato';
import { Suporte } from './suporte/suporte';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'contato', component: Contato },
    { path: 'suporte', component: Suporte },
    { path: 'cadastro', component: Cadastro }
];