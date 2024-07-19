import {Component, EventEmitter, Output} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {AvatarModule} from "primeng/avatar";
import {Button} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {Usuario} from "../../../common/model/Usuario";
import {environment} from "../../../../environments/environment";
import {TreeSelectModule} from "primeng/treeselect";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    Button,
    SplitButtonModule,
    MenuModule,
    TreeSelectModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output()
  toggleSidebarEvent = new EventEmitter();
  items: MenuItem[] = [
    {
      label: 'Cerrar Sesión',
      icon: 'pi pi-sign-out',
      command: () => {
        console.log('Cerrar Sesión');
      }
    }, {
      separator: true
    },
    {
      label: environment.APP_VERSION,
      icon: 'pi pi-tag',
      style: {
        'font-size': '0.8em'
      }
    }

  ];

  usuario: Usuario;
  nodes: any[] = [
    {
      key: '1',
      label: 'Documents',
      children: [
        {
          key: '1-1',
          label: 'Work'
        },
        {
          key: '1-2',
          label: 'Home'
        }
      ]
    },
    {
      key: '2',
      label: 'Pictures',
      children: [
        {
          key: '2-1',
          label: 'barcelona.jpg'
        },
        {
          key: '2-2',
          label: 'primeui'
        }
      ]
    },
  ];


  constructor() {
    this.usuario = {
      id: 1,
      nombre: 'John',
      apellido: 'Doe',
      email: 'john@gamil.com',
      activo: true,
      fechaActualizacion: new Date(),
      fechaCreacion: new Date(),
      fechaNacimiento: new Date(),
      password: '123456',
      telefono: '1234567890'
    };
  }

}

