import { environment } from '../../../../environments/environment';
import { Films, Request } from '../../../shared/models';
import { GenericsService } from '../generics.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class FilmsService implements GenericsService<Films> {
	private base_url: string = environment.base_url;
	private context: string = 'films';

	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Request<Films>> {
		return this.httpClient.get<Request<Films>>(`${this.base_url}/${this.context}`);
	}

	public getByID(id: string): Observable<Films> {
		return this.httpClient.get<Films>(`${this.base_url}/${this.context}/${id}`);
	}
}
