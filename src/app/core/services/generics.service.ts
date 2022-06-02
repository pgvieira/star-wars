import { Request } from '../../shared/models';
import { Observable } from 'rxjs';

export abstract class GenericsService<T> {
	public abstract getAll(): Observable<Request<T>>;
	public abstract getByID(id: string): Observable<T>;
}
