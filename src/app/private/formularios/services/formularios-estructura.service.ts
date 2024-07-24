import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormularioEstructura} from "../../../common/model/formulario-estructura/FormularioEstructura";
import {FormularioEstructuraCreateDto} from "../../../common/model/formulario-estructura/FormularioEstructuraCreateDto";
import {FormularioEstructuraUpdateDto} from "../../../common/model/formulario-estructura/FormularioEstructuraUpdateDto";
import {
  FormularioEstructuraCompletaDto
} from "../../../common/model/formulario-estructura/FormularioEstructuraCompletaDto";
import {
  UpdateOrdenDto
} from "../../../common/model/preguntas/UpdateOrdenDto";

@Injectable({
  providedIn: 'root'
})
export class FormulariosEstructuraService {

  private readonly url = `${environment.API_URL}/formularios-estructura`;

  constructor(public http: HttpClient) { }

  listar(){
    return this.http.get<FormularioEstructura[]>(this.url);
  }

  crear(formularioEstructura: FormularioEstructuraCreateDto){
    return this.http.post<FormularioEstructura>(this.url, formularioEstructura);
  }

  obtenerEstructuraCompleta(id: number) {
    return this.http.get<FormularioEstructuraCompletaDto>(`${this.url}/${id}`);
  }

  editar(formularioEstructuraUpdateDto: FormularioEstructuraUpdateDto) {
    return this.http.put<FormularioEstructura>(this.url, formularioEstructuraUpdateDto);
  }


}

