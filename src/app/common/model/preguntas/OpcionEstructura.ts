import {PreguntaFormularioEstructura} from "./PreguntaFormularioEstructura";

export interface OpcionEstructura {
  id: number
  nombre: string
  orden: number
  activo: any
  peso?: number
  preguntaFormularioEstructura: PreguntaFormularioEstructura
}
