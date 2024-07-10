import { Injectable } from '@angular/core';
import { HeroInfo } from '../interfaces/hero-info';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private endpoint = "Hero";

  constructor(private http: HttpClient) {}

  public getAllHeroes(): Observable<HeroInfo[]> {

    return this.http.get<HeroInfo[]>(`${environment.apiUrl}/${this.endpoint}`);
  }
}
