export interface Dependencia {
  id: number
  codigo: string
  nombre: string
  mision?: string
  direccion: boolean
  identificadorSfc: number
  padreSfc: number
  activo: boolean
  fechaActualizacion: string
  modeloEvaluacion?: string
}
