import { FilmsService } from './films/films.service';
import { PeopleService } from './people/people.service';
import { PlanetsService } from './planets/planets.service';
import { SpeciesService } from './species/species.service';
import { StarshipsService } from './starships/starships.service';
import { VehiclesService } from './vehicles/vehicles.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [],
	imports: [CommonModule],
	providers: [FilmsService, PeopleService, PlanetsService, SpeciesService, StarshipsService, VehiclesService],
})
export class ServicesModule {}
