import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {AvatarModule} from "primeng/avatar";
import {Button} from "primeng/button";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuModule} from "primeng/menu";
import {MenuItem} from "primeng/api";
import {Usuario} from "../../../common/model/Usuario";
import {environment} from "../../../../environments/environment";
import {TreeSelectModule} from "primeng/treeselect";
import {ToastModule} from "primeng/toast";
import {BadgeModule} from "primeng/badge";
import {NgIf} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {style} from "@angular/animations";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    Button,
    SplitButtonModule,
    MenuModule,
    TreeSelectModule,
    ToastModule,
    BadgeModule,
    NgIf,
    Ripple
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  @Output()
  toggleSidebarEvent = new EventEmitter();
  items: MenuItem[];
  usuario: Usuario;


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
    this.items = [
      {
        label: this.usuario.nombre + ' ' + this.usuario.apellido,
        icon: 'pi pi-user',
        items: [
          {
            label: 'Ayuda',
            icon: 'pi pi-question-circle',
            command: () => {
              console.log('Ayuda');
            }
          },
          {
            label: `${environment.APP_VERSION}`,
            icon: 'pi pi-tag',
            style: {
              color: 'gray',
              fontSize: '0.8em'
            },
            iconStyle: {
              color: 'gray',
              fontSize: '0.95em'
            }
          },
          {
            separator: true
          },
          {
            label: 'Cerrar Sesión',
            icon: 'pi pi-sign-out',
            command: () => {
              console.log('Cerrar Sesión');
            }
          }
        ]
      },
    ]
  }

  ngOnInit(): void {
  }

}

