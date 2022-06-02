import { Films } from './films';
import { Species } from './species';
import { Starships } from './starships';
import { Vehicles } from './vehicles';

export interface People {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: Films[];
	species: Species[];
	vehicles: Vehicles[];
	starships: Starships[];
	created: string;
	edited: string;
	url: string;
}
