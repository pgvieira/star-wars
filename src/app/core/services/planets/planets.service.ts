import { environment } from '../../../../environments/environment';
import { Planets, Request } from '../../../shared/models';
import { GenericsService } from '../generics.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PlanetsService implements GenericsService<Planets> {
	private base_url: string = environment.base_url;
	private context: string = 'planets';

	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Request<Planets>> {
		return this.httpClient.get<Request<Planets>>(`${this.base_url}/${this.context}`);
	}

	public getByID(id: string): Observable<Planets> {
		return this.httpClient.get<Planets>(`${this.base_url}/${this.context}/${id}`);
	}
}
