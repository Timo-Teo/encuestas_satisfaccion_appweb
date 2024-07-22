import {Periodo} from "../Periodo";
import {Dependencia} from "../dependencia/Dependencia";

export interface FormularioEstructura {
  id: number
  nombre: string
  vigente: boolean
  total: number | null
  periodo: Periodo
  dependencia: Dependencia
}
