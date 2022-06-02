import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home',
	},
	{
		path: 'films',
		loadChildren: () => import('./pages/films/films.module').then((m) => m.FilmsModule),
	},
	{
		path: 'home',
		loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
	},
	{
		path: 'people',
		loadChildren: () => import('./pages/people/people.module').then((m) => m.PeopleModule),
	},
	{
		path: 'planets',
		loadChildren: () => import('./pages/planets/planets.module').then((m) => m.PlanetsModule),
	},
	{
		path: 'species',
		loadChildren: () => import('./pages/species/species.module').then((m) => m.SpeciesModule),
	},
	{
		path: 'starships',
		loadChildren: () => import('./pages/starships/starships.module').then((m) => m.StarshipsModule),
	},
	{
		path: 'vehicles',
		loadChildren: () => import('./pages/vehicles/vehicles.module').then((m) => m.VehiclesModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
