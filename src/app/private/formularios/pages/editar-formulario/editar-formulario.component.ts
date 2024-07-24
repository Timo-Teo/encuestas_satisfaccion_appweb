import { Component, OnInit } from '@angular/core';
import { Button } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from "primeng/inputtext";
import { PaginatorModule } from "primeng/paginator";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TabViewModule } from "primeng/tabview";
import { CurrencyPipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { Dependencia } from "../../../../common/model/dependencia/Dependencia";
import { Periodo } from "../../../../common/model/Periodo";
import { DependenciasService } from "../../../services/dependencias.service";
import { PeriodosService } from "../../../services/periodos.service";
import { FormulariosEstructuraService } from "../../services/formularios-estructura.service";
import { ActivatedRoute, Router } from "@angular/router";
import { forkJoin } from "rxjs";
import {
  FormularioEstructuraCreateDto
} from "../../../../common/model/formulario-estructura/FormularioEstructuraCreateDto";
import {
  FormularioEstructuraUpdateDto
} from "../../../../common/model/formulario-estructura/FormularioEstructuraUpdateDto";
import { FormularioEstructura } from "../../../../common/model/formulario-estructura/FormularioEstructura";
import { InputSwitchModule } from "primeng/inputswitch";
import { TagModule } from "primeng/tag";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { RatingModule } from "primeng/rating";
import { GrupoPreguntaEstructuraService } from "../../services/grupo-pregunta-estructura.service";
import { Ripple } from "primeng/ripple";
import { MessageService } from "primeng/api";
import { PreguntaFormularioEstructura } from "../../../../common/model/preguntas/PreguntaFormularioEstructura";
import {
  FormularioEstructuraCompletaDto
} from "../../../../common/model/formulario-estructura/FormularioEstructuraCompletaDto";
import {
  GrupoPreguntaEstructuraUpdateOrdenDto
} from "../../../../common/model/preguntas/GrupoPreguntaEstructuraUpdateOrdenDto";

@Component({
  selector: 'app-editar-formulario',
  standalone: true,
  imports: [
    Button,
    DropdownModule,
    FloatLabelModule,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    TabViewModule,
    NgClass,
    InputSwitchModule,
    TagModule,
    TableModule,
    ToastModule,
    RatingModule,
    CurrencyPipe,
    Ripple,
    NgIf,
    NgForOf
  ],
  providers: [
    MessageService
  ],
  templateUrl: './editar-formulario.component.html',
  styleUrl: './editar-formulario.component.scss'
})
export class EditarFormularioComponent implements OnInit {

  formularioEstructura: FormularioEstructuraCompletaDto | null;
  preguntasFormularioEstructura: PreguntaFormularioEstructura[];
  grupoPreguntaEstructuraUpdateOrdenDtos: GrupoPreguntaEstructuraUpdateOrdenDto[];
  formularioEstructuraForm: FormGroup;
  dependencias: Dependencia[];
  periodos: Periodo[];
  vigencias: string[];
  columnasGrupoPreguntaEstructura: string[];
  columnasPreguntasFormularioEstructura: string[];
  columnasOpcionesEstructura: string[];
  habilitarBotonGuardarOrden: boolean;

  constructor(
    private builder: FormBuilder,
    private dependenciasService: DependenciasService,
    private periodosService: PeriodosService,
    private formulariosEstructuraService: FormulariosEstructuraService,
    private grupoPreguntaEstructuraService: GrupoPreguntaEstructuraService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.formularioEstructura = null;
    this.preguntasFormularioEstructura = [];
    this.dependencias = [];
    this.periodos = [];
    this.grupoPreguntaEstructuraUpdateOrdenDtos = [];
    this.vigencias = ["ACTIVO", "INACTIVO"];
    this.columnasGrupoPreguntaEstructura = ['ID', 'Nombre', 'Orden']
    this.columnasPreguntasFormularioEstructura = ['ID', 'Nombre', 'Opciones']
    this.columnasOpcionesEstructura = ['ID', 'Nombre', 'Peso']
    this.formularioEstructuraForm = new FormGroup({});
    this.habilitarBotonGuardarOrden = false;
    this.construirFormulario();
  }

  ngOnInit() {

    this.route.params.subscribe({
      next: (params) => {
        const id = params['id'];
        if (id && isNaN(id)) {
          this.router.navigate([`admin/formularios`]).then();
          return;
        }
        this.obtenerRecursos();
        this.obtenerFormulario(id);
      }
    });

  }

  private obtenerRecursos() {
    forkJoin([
      this.dependenciasService.listar(),
      this.periodosService.listar()
    ]).subscribe({
      next: ([dependencias, periodos]) => {
        this.dependencias = dependencias;
        this.periodos = periodos
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  private obtenerFormulario(id: number) {
    this.formulariosEstructuraService.obtenerEstructuraCompleta(id).subscribe({
      next: (formularioEstructura) => {
        this.empatarFormulario(formularioEstructura);
        this.formularioEstructura = formularioEstructura;
      },
      error: (error) => {
        console.error(error);
        this.router.navigate([`admin/formularios`]).then();
      }
    });
  }


  private empatarFormulario(formulario: FormularioEstructura | FormularioEstructuraUpdateDto) {
    const patchData = {
      nombre: formulario.nombre,
      vigencia: formulario.vigente ? 'ACTIVO' : 'INACTIVO',
      dependencia: 'dependenciaId' in formulario ?
        (formulario as FormularioEstructuraUpdateDto).dependenciaId :
        (formulario as FormularioEstructura).dependencia?.id,
      periodo: 'periodoId' in formulario ?
        (formulario as FormularioEstructuraUpdateDto).periodoId :
        (formulario as FormularioEstructura).periodo?.id
    };

    this.formularioEstructuraForm.patchValue(patchData);
  }


  private construirFormulario() {
    this.formularioEstructuraForm = this.builder.group({
      nombre: ['', Validators.required],
      periodo: ['', Validators.required],
      vigencia: ['', Validators.required],
      dependencia: ['', Validators.required],
    });
    this.formularioEstructuraForm.disable();
  }

  private guardarFormulario(formularioCreateDto: FormularioEstructuraCreateDto) {
    this.formulariosEstructuraService.editar(formularioCreateDto).subscribe({
      next: (formularioEstructura) => {
        this.empatarFormulario(formularioEstructura);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  onGuardarFormulario() {

    if (this.formularioEstructuraForm.invalid) {
      this.formularioEstructuraForm.markAllAsTouched();
      return;
    }

    const formularioEstructura: FormularioEstructuraCreateDto = {
      dependenciaId: this.dependencia?.value,
      nombre: this.nombre?.value,
      periodoId: this.periodo?.value,
      vigente: this.vigencia?.value === 'ACTIVO'
    }

    this.guardarFormulario(formularioEstructura);
  }

  get nombre() {
    return this.formularioEstructuraForm.get('nombre');
  }

  get periodo() {
    return this.formularioEstructuraForm.get('periodo');
  }

  get vigencia() {
    return this.formularioEstructuraForm.get('vigencia');
  }

  get dependencia() {
    return this.formularioEstructuraForm.get('dependencia');
  }

  onHabilitarEdicion(event: any) {
    const checked = event.checked;
    if (checked) {
      this.formularioEstructuraForm.enable();
      return
    }
    this.formularioEstructuraForm.disable();
  }

  getSeverity(vigente: boolean) {
    return vigente ? 'success' : 'danger'
  }


  onRowReorder(event: any) {
    console.log(event);
    const itemsOriginales = [...this.formularioEstructura!.gruposPreguntaEstructura].sort((a, b) => a.orden - b.orden);
    const itemsNuevoOrden = [...this.formularioEstructura!.gruposPreguntaEstructura];

    const originalOrderMap = new Map(itemsOriginales.map((item, index) => [item.id, index]));

    this.grupoPreguntaEstructuraUpdateOrdenDtos = itemsNuevoOrden
      .map((item, index) =>
        ({ id: item.id, orden: index + 1 }))
      .filter(({ id, orden }) => {
        const originalIndex = originalOrderMap.get(id);
        return originalIndex !== undefined && originalIndex !== (orden - 1);
      });

    this.habilitarBotonGuardarOrden = true;
  }

  onGuardarOrden() {
    this.grupoPreguntaEstructuraService.actualizarOrdenPorFormularioEstructuraId(
      this.formularioEstructura!.id,
      this.grupoPreguntaEstructuraUpdateOrdenDtos
    ).subscribe({
      next: () => {
        this.grupoPreguntaEstructuraUpdateOrdenDtos = [];
        this.obtenerFormulario(this.formularioEstructura!.id);
        this.habilitarBotonGuardarOrden = false;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


}
