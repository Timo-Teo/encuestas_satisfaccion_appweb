import {Component, OnInit} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {FloatLabelModule} from "primeng/floatlabel";
import {InputTextModule} from "primeng/inputtext";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MultiSelectModule} from "primeng/multiselect";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {Dependencia} from "../../../../common/model/dependencia/Dependencia";
import {DropdownModule} from "primeng/dropdown";
import {DependenciasService} from "../../../services/dependencias.service";
import {Button} from "primeng/button";
import {NgClass, NgIf} from "@angular/common";
import {Periodo} from "../../../../common/model/Periodo";
import {PeriodosService} from "../../../services/periodos.service";
import {FormulariosEstructuraService} from "../../services/formularios-estructura.service";
import {
  FormularioEstructuraCreateDto
} from "../../../../common/model/formulario-estructura/FormularioEstructuraCreateDto";

@Component({
  selector: 'app-crear-formulario',
  standalone: true,
  imports: [
    TabViewModule,
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    MultiSelectModule,
    CascadeSelectModule,
    DropdownModule,
    Button,
    NgClass,
    NgIf
  ],
  templateUrl: './crear-formulario.component.html',
  styleUrl: './crear-formulario.component.scss'
})
export class CrearFormularioComponent implements OnInit {
  formularioEstructura: FormGroup;
  dependencias: Dependencia[];
  periodos: Periodo[];
  vigencias: string[];
  habilitarDisenio: boolean;

  constructor(
    private builder: FormBuilder,
    private dependenciasService: DependenciasService,
    private periodosService: PeriodosService,
    private formulariosEstructuraService: FormulariosEstructuraService
  ) {
    this.dependencias = [];
    this.periodos = [];
    this.habilitarDisenio = false;
    this.vigencias = ["ACTIVO", "INACTIVO"];
    this.formularioEstructura = new FormGroup({});
    this.construirFormulario();
  }

  ngOnInit(): void {
    this.dependenciasService.listar().subscribe({
      next: (dependencias) => {
        this.dependencias = dependencias;
      },
      error: (error) => {
        console.error(error);
      }
    });
    this.periodosService.listar().subscribe({
      next: (periodos) => {
        console.log(periodos);
        this.periodos = periodos;
        this.periodos.reverse();
      },
      error: (error) => {
        console.error(error);
      }
    });

  }

  private construirFormulario() {
    this.formularioEstructura = this.builder.group({
      nombre: ['', Validators.required],
      periodo: ['', Validators.required],
      vigencia: ['', Validators.required],
      dependencia: ['', Validators.required],
    });

    this.formularioEstructura.valueChanges.subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


  onGuardarFormulario() {
    if (this.formularioEstructura.invalid) {
      this.formularioEstructura.markAllAsTouched();
      console.log('Formulario inválido');
      return;
    }
    console.log(this.formularioEstructura.value);
    const formularioEstructura: FormularioEstructuraCreateDto = {
      dependenciaId: this.dependencia?.value,
      nombre: this.nombre?.value,
      periodoId: this.periodo?.value,
      vigente: this.vigencia?.value === 'ACTIVO'
    }
    this.formulariosEstructuraService.crear(formularioEstructura).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  get nombre() {
    return this.formularioEstructura.get('nombre');
  }

  get periodo() {
    return this.formularioEstructura.get('periodo');
  }

  get vigencia() {
    return this.formularioEstructura.get('vigencia');
  }

  get dependencia() {
    return this.formularioEstructura.get('dependencia');
  }
}
