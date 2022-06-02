import { environment } from '../../../../environments/environment';
import { Request, Starships } from '../../../shared/models';
import { GenericsService } from '../generics.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StarshipsService implements GenericsService<Starships> {
	private base_url: string = environment.base_url;
	private context: string = 'starships';

	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Request<Starships>> {
		return this.httpClient.get<Request<Starships>>(`${this.base_url}/${this.context}`);
	}

	public getByID(id: string): Observable<Starships> {
		return this.httpClient.get<Starships>(`${this.base_url}/${this.context}/${id}`);
	}
}
