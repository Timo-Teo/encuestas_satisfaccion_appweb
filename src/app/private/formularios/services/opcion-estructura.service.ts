import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UpdateOrdenDto} from "../../../common/model/preguntas/UpdateOrdenDto";

@Injectable({
  providedIn: 'root'
})
export class OpcionEstructuraService {

  private readonly url = `${environment.API_URL}/opciones-estructura`;

  constructor(private http: HttpClient) { }

  actualizarOrdenPorPreguntaFormularioEstructuraId(preguntaFormularioEstructuraId: number, opcionesEstructuraUpdateOrdenDtos: UpdateOrdenDto[]) {
    return this.http.put(`${this.url}/orden/pregunta-formulario-estructura/${preguntaFormularioEstructuraId}`, opcionesEstructuraUpdateOrdenDtos);
  }
}
