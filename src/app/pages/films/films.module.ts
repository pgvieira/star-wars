import { FilmsComponent } from './films.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: FilmsComponent,
	},
];

@NgModule({
	declarations: [FilmsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FilmsModule {}
