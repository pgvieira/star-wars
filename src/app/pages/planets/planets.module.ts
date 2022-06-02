import { PlanetsComponent } from './planets.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PlanetsComponent,
	},
];

@NgModule({
	declarations: [PlanetsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlanetsModule {}
