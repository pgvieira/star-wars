import { SpeciesComponent } from './species.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: SpeciesComponent,
	},
];

@NgModule({
	declarations: [SpeciesComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SpeciesModule {}
