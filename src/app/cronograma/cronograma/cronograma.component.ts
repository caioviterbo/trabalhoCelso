import { CronogramaService } from './../services/cronograma.service';
import { Aula } from './../model/aula';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss'],
})
export class CronogramaComponent {

  aulas: Observable<Aula[]>;
  colunasExibidas = ["dia", "horario", "disciplina", "professor"]


  constructor(private cronogramaService: CronogramaService) {
    this.aulas = this.cronogramaService.listarAulas();
  }

}
