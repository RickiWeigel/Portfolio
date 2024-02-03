import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  navigationElements: Element | null | any;
  nav: Element | null | any;
  slider: Element | null | any;
  menuOpen: boolean = false;

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

  menu() {
    if (!this.menuOpen) {
      console.log(this.openMenu);
      this.openMenu();
      this.menuOpen = true;
    } else {
      console.log(this.openMenu);
      this.closeMenu();
      this.menuOpen = false;
    }
  }

  openMenu() {
    let doc: HTMLElement | null | any = document.getElementById('sidebarMenu');
    doc.classList.remove('menuSlideOut');
    doc.classList.add('menuSlideIn');

  
  }

  closeMenu(){
    let doc: HTMLElement | null | any = document.getElementById('sidebarMenu');
    doc.classList.remove('menuSlideIn');
    doc.classList.add('menuSlideOut');
  }
}
