import { Films } from './films';
import { People } from './people';

export interface Planets {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: People[];
	films: Films[];
	created: string;
	edited: string;
	url: string;
}
