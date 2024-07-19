import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  sidebarMenu: { navigateTo: string, title: string, iconSrc: string } [] = [
    {navigateTo: '/', title: 'Home', iconSrc: 'assets/icons/home.svg'},
    {navigateTo: '/manager', title: 'Task manager', iconSrc: 'assets/icons/task.svg'},
    {navigateTo: '/chart', title: 'Dashboard', iconSrc: 'assets/icons/bar_chart.svg'}
  ]
}
