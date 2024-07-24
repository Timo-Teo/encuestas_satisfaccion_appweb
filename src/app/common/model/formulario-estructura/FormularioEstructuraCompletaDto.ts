export interface FormularioEstructuraCompletaDto {
  periodo: PeriodoDto
  dependencia: DependenciaDto
  id: number
  nombre: string
  vigente: boolean
  gruposPreguntaEstructura: GrupoPreguntaEstructuraDto[]
}

export interface PeriodoDto {
  id: number
  nombre: string
  descripcion: any
  activo: boolean
  fechaInicio: string
  fechaFin: string
  fechaNotificacion: string
  fechaInicioNotificacion: string
  fechaFinNotificacion: string
  fechaInicioEvaluacion: string
  fechaFinEvaluacion: string
  cerrado: boolean
  rangosEvaluacion: any
  rangosJerarquica: any
  valoresDesempenoJerarquica: any
}

export interface DependenciaDto {
  id: number
  codigo: string
  nombre: string
  mision: string
  direccion: boolean
  identificadorSfc: number
  padreSfc: number
  activo: boolean
  fechaActualizacion: string
  modeloEvaluacion: string
}

export interface GrupoPreguntaEstructuraDto {
  id: number
  nombre: string
  preguntasFormularioEstructura: PreguntaFormularioEstructuraDto[]
  orden: number
}

export interface PreguntaFormularioEstructuraDto {
  id: number
  nombre: string
  opcionesEstructura: OpcionEstructuraDto[]
}

export interface OpcionEstructuraDto {
  id: number
  nombre: string
  peso?: number
}
