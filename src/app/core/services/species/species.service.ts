import { environment } from '../../../../environments/environment';
import { Request, Species } from '../../../shared/models';
import { GenericsService } from '../generics.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SpeciesService implements GenericsService<Species> {
	private base_url: string = environment.base_url;
	private context: string = 'species';

	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Request<Species>> {
		return this.httpClient.get<Request<Species>>(`${this.base_url}/${this.context}`);
	}

	public getByID(id: string): Observable<Species> {
		return this.httpClient.get<Species>(`${this.base_url}/${this.context}/${id}`);
	}
}
