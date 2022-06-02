import { People } from './people';
import { Planets } from './planets';
import { Species } from './species';
import { Starships } from './starships';
import { Vehicles } from './vehicles';

export interface Films {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: People[];
	planets: Planets[];
	starships: Starships[];
	vehicles: Vehicles[];
	species: Species[];
	created: string;
	edited: string;
	url: string;
}
