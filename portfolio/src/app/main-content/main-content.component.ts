import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent, AboutMeComponent, SkillsComponent,MyProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
