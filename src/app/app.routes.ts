import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './test/test/test.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'test', component: TestComponent}
];
