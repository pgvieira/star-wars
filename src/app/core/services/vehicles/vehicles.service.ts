import { environment } from '../../../../environments/environment';
import { Request, Vehicles } from '../../../shared/models';
import { GenericsService } from '../generics.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class VehiclesService implements GenericsService<Vehicles> {
	private base_url: string = environment.base_url;
	private context: string = 'vehicles';

	constructor(private httpClient: HttpClient) {}

	public getAll(): Observable<Request<Vehicles>> {
		return this.httpClient.get<Request<Vehicles>>(`${this.base_url}/${this.context}`);
	}

	public getByID(id: string): Observable<Vehicles> {
		return this.httpClient.get<Vehicles>(`${this.base_url}/${this.context}/${id}`);
	}
}
