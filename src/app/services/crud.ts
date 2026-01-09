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
export interface PhonePostResponse {
  id: string,
  name: string,
 data : ProductSpecs
  createdAt ?: string
}
export interface ProductSpecs {
  year: number;
  price: number;
  'CPU model': string;
  'Hard disk size': string;
}
export interface PhonePost {
  name: string,
 data : ProductSpecs
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

  postObject(data : PhonePost): Observable<PhonePostResponse> {
    return this.http.post<PhonePostResponse>(`${this.apiUrl}/objects`,data);
  }
  putObject(data: PhonePost, id: number):  Observable<PhonePostResponse> {
    return this.http.put<PhonePostResponse>(`${this.apiUrl}objects/${id}`,data);

  }
}
