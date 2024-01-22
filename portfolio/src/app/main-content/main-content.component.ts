import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
