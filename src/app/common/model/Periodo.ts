export interface Periodo {
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
  rangosEvaluacion: string
  rangosJerarquica: string
  valoresDesempenoJerarquica: string
}
