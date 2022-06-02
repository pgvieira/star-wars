import { Films } from './films';
import { People } from './people';

export interface Vehicles {
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: string;
	length: string;
	max_atmosphering_speed: string;
	crew: string;
	passengers: string;
	cargo_capacity: string;
	consumables: string;
	vehicle_class: string;
	pilots: People[];
	films: Films[];
	created: string;
	edited: string;
	url: string;
}
