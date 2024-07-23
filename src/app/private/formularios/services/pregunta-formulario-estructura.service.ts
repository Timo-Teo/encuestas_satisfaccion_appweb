import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PreguntaFormularioEstructura} from "../../../common/model/preguntas/PreguntaFormularioEstructura";

@Injectable({
  providedIn: 'root'
})
export class PreguntaFormularioEstructuraService {

  private readonly url = `${environment.API_URL}/preguntas-formulario-estructura`;

  constructor(
    private http: HttpClient
  ) { }

  listarPorGrupoPreguntaEstructuraId(grupoPreguntaEstructuraId: number){
    return this.http.get<PreguntaFormularioEstructura[]>(`${this.url}/grupo-pregunta-estructura/${grupoPreguntaEstructuraId}`);
  }
}
