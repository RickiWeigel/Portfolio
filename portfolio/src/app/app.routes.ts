import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalComponent } from './main-content/legal/legal.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: LegalComponent },

];
