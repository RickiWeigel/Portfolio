import { Component, HostListener } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';
import { BackgroundImagesComponent } from './background-images/background-images.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    LandingPageComponent,
    AboutMeComponent,
    SkillsComponent,
    MyProjectsComponent,
    ContactComponent,
    BackgroundImagesComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  // Event-Handler für das Scrollen
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollY = window.scrollY; // Vertikale Scrollposition
    console.log('Vertikale Scrollposition:', scrollY);
    // Hier kannst du die Position weiterverarbeiten
  }
}
