import {Routes} from '@angular/router';
import {MainLayoutComponent} from "./private/layouts/main-layout/main-layout.component";
import {FormulariosComponent} from "./private/formularios/pages/formularios/formularios.component";
import {EditarFormularioComponent} from "./private/formularios/pages/editar-formulario/editar-formulario.component";
import {CrearFormularioComponent} from "./private/formularios/pages/crear-formulario/crear-formulario.component";

export const routes: Routes = [
  {
    path: 'admin', component: MainLayoutComponent, children: [
      {
        path: 'formularios', component: FormulariosComponent
      },
      {
        path: 'formularios/crear', component: CrearFormularioComponent
      },
      {
        path: 'formularios/:id', component: EditarFormularioComponent
      }
    ]
  }
];
