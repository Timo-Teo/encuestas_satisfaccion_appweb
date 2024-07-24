import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {PreguntaFormularioEstructura} from "../../../common/model/preguntas/PreguntaFormularioEstructura";
import {UpdateOrdenDto} from "../../../common/model/preguntas/UpdateOrdenDto";

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

  actualizarOrdenPorGrupoEstructuraId(grupoPreguntaEstructuraId: number, preguntasFormularioEstructuraUpdateOrdenDtos: UpdateOrdenDto[]) {
    return this.http.put(`${this.url}/orden/grupo-pregunta-estructura/${grupoPreguntaEstructuraId}`, preguntasFormularioEstructuraUpdateOrdenDtos);

  }
}
