import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {GrupoPreguntaEstructura} from "../../../common/model/preguntas/GrupoPreguntaEstructura";

@Injectable({
  providedIn: 'root'
})
export class GrupoPreguntaEstructuraService {
  private readonly url = `${environment.API_URL}/grupos-preguntas-estructura`;

  constructor(public http: HttpClient) { }

  listarPorFormularioEstructuraId(formularioEstructuraId: number){
    return this.http.get<GrupoPreguntaEstructura[]>(`${this.url}/formulario-estructura/${formularioEstructuraId}`);
  }
}
