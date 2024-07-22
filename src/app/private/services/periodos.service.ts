import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Periodo} from "../../common/model/Periodo";

@Injectable({
  providedIn: 'root'
})
export class PeriodosService {

  private readonly url = `${environment.API_URL}/periodos`;

  constructor(
    private http: HttpClient
  ) { }

  listar(){
    return this.http.get<Periodo[]>(this.url);
  }
}
