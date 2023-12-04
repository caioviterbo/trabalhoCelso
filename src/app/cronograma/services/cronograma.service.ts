import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Aula } from '../model/aula';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CronogramaService {
  private readonly API = '/assets/aulas.json';

  constructor(private httpClient: HttpClient) {}

  listarAulas() {
    return this.httpClient.get<Aula[]>(this.API).pipe(
      first(),
      tap((aulas) => console.log('Aulas:', aulas))
    );
  }
}
