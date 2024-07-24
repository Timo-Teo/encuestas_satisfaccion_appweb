import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {GrupoPreguntaEstructura} from "../../../common/model/preguntas/GrupoPreguntaEstructura";
import {
  UpdateOrdenDto
} from "../../../common/model/preguntas/UpdateOrdenDto";

@Injectable({
  providedIn: 'root'
})
export class GrupoPreguntaEstructuraService {
  private readonly url = `${environment.API_URL}/grupos-preguntas-estructura`;

  constructor(public http: HttpClient) { }

  listarPorFormularioEstructuraId(formularioEstructuraId: number){
    return this.http.get<GrupoPreguntaEstructura[]>(`${this.url}/formulario-estructura/${formularioEstructuraId}`);
  }

  actualizarOrdenPorFormularioEstructuraId(id: number, grupoPreguntaEstructuraUpdateOrdenDtos: UpdateOrdenDto[]) {
    return this.http.put(`${this.url}/orden/formulario-estructura/${id}`, grupoPreguntaEstructuraUpdateOrdenDtos);
  }
}
