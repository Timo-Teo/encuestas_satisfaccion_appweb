import {FormularioEstructura} from "../formulario-estructura/FormularioEstructura";

export interface GrupoPreguntaEstructura {
  id: number
  nombre: string
  orden: number
  activo: any
  formularioEstructura: FormularioEstructura
}
