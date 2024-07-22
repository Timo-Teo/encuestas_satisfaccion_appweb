import { Component } from '@angular/core';
import {SidebarModule} from "primeng/sidebar";
import {Button} from "primeng/button";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    SidebarModule,
    Button,
    NavbarComponent,
    RouterOutlet,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
