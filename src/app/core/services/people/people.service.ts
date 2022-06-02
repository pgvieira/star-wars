import { environment } from '../../../../environments/environment';
import { People, Request } from '../../../shared/models';
import { GenericsService } from '../generics.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class PeopleService implements GenericsService<People> {
	private base_url: string = environment.base_url;
	private context: string = 'people';

	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Request<People>> {
		return this.httpClient.get<Request<People>>(`${this.base_url}/${this.context}`);
	}

	public getByID(id: string): Observable<People> {
		return this.httpClient.get<People>(`${this.base_url}/${this.context}/${id}`);
	}
}
