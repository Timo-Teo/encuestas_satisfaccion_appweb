import {Component, OnInit} from '@angular/core';
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {FieldsetModule} from "primeng/fieldset";
import {TableModule} from "primeng/table";
import {Button, ButtonDirective} from "primeng/button";
import {FormularioEstructura} from "../../../../common/model/formulario-estructura/FormularioEstructura";
import {FormulariosEstructuraService} from "../../services/formularios-estructura.service";
import {TagModule} from "primeng/tag";
import {Ripple} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formularios',
  standalone: true,
  imports: [
    CardModule,
    PanelModule,
    FieldsetModule,
    TableModule,
    Button,
    TagModule,
    Ripple,
    ButtonDirective,
    InputTextModule,
    FormsModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.scss'
})
export class FormulariosComponent implements OnInit {

  formulariosEstructura: FormularioEstructura[];
  formulariosSeleccionados: FormularioEstructura[];
  valorBusqueda: string | undefined;

  constructor(
    private formulariosEstructuraService: FormulariosEstructuraService,
    private router: Router
  ) {
    this.formulariosEstructura = [];
    this.formulariosSeleccionados = [];
  }

  ngOnInit() {
    this.formulariosEstructuraService.listar().subscribe({
      next: (formularios) => {
        this.formulariosEstructura = formularios;
      }
    })
  }

  getSeverity(vigente: boolean) {
    return vigente ? 'success' : 'danger'
  }

  onNuevo(){
    this.router.navigate(['admin/formularios/crear']).then()
  }

  onEditar(id: number) {
    this.router.navigate([`admin/formularios/${id}`]).then()

  }

}
