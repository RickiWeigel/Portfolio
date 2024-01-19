import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  navigationElements: any;
  nav: any;
  slider: any;

  ngOnInit(): void {
    this.navigationElements = document.querySelectorAll('nav ul li');
    this.nav = document.querySelector('nav');
    this.slider = document.querySelector('.slider');

    this.navigationElements.forEach((element: any) => {
      element.addEventListener('mouseenter', () => {
        const { x: elmX } = element.getBoundingClientRect();
        const { x: navX } = this.nav.getBoundingClientRect();
        this.slider.style.transform = `translate(${elmX - navX}px, 0)`;
      });
    });

    this.nav.addEventListener('mouseleave', () => {
      this.nav.classList.remove('animate');
    });

    this.nav.addEventListener('mouseenter', () => {
      setTimeout(() => {
        this.nav.classList.add('animate');
      }, 50);
      
    });
  }
}