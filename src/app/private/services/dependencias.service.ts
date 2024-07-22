import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Dependencia} from "../../common/model/dependencia/Dependencia";

@Injectable({
  providedIn: 'root'
})
export class DependenciasService {

  private readonly url = `${environment.API_URL}/dependencias`;

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Dependencia[]>(this.url);
  }
}
