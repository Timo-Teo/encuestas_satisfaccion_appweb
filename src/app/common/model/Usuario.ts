export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  telefono: string;
  fechaNacimiento: Date;
  fechaCreacion: Date;
  fechaActualizacion: Date;
  activo: boolean;
}
