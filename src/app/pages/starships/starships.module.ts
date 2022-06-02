import { StarshipsComponent } from './starships.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: StarshipsComponent,
	},
];

@NgModule({
	declarations: [StarshipsComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StarshipsModule {}
