import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./pages/home/components/home/home.component').then(m => m.HomeComponent) },
    { path: 'items', loadComponent: () => import('./pages/items/components/item-list/item-list.component').then(m => m.ItemListComponent) },
    { path: '**', loadComponent: () => import('./pages/Not Found/components/not-found/not-found.component').then(m => m.NotFoundComponent) }  // Wildcard route for 404 page

];
