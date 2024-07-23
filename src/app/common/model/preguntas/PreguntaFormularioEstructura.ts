import {GrupoPreguntaEstructura} from "./GrupoPreguntaEstructura";

export interface PreguntaFormularioEstructura {
  id: number
  nombre: string
  orden: number
  activo: any
  grupoPreguntaEstructura: GrupoPreguntaEstructura
}
