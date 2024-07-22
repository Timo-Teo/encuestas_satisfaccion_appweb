import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormularioEstructura} from "../../../common/model/formulario-estructura/FormularioEstructura";
import {FormularioEstructuraCreateDto} from "../../../common/model/formulario-estructura/FormularioEstructuraCreateDto";

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
    return this.http.post(this.url, formularioEstructura);
  }
}
