import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Phone {
  id: number,
  name: string,
  data : {
    color: string, 
    capacity: string
  }
}
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = "https://api.restful-api.dev/";

  constructor (private http: HttpClient) {}

  getObjects(): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.apiUrl}/objects`)
  }
}
