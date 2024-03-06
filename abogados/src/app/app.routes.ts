import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { PeticionesComponent } from './components/peticiones/peticiones.component';
import { PeticComponent } from './components/petic/petic.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {path:'login', component : LoginComponent},
    {path:'registro', component : RegistroComponent},
    {path:'peticiones', component : PeticionesComponent},
    {path: 'petic', component : PeticComponent}
];
