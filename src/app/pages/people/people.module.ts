import { PeopleComponent } from './people.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PeopleComponent,
	},
];

@NgModule({
	declarations: [PeopleComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PeopleModule {}
