import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './test/test/test.component';
import { TestGSPAComponent } from './test/test/testGSPA/testGSPA.component';
import { CreacionContenidoComponent } from './pages/creacion-contenido/creacion-contenido.component';
import { DisenioMarcaComponent } from './pages/disenio-marca/disenio-marca.component';
import { WebsitesComponent } from './pages/websites/websites.component';
import { DisenioContenidoComponent } from './pages/disenio-contenido/disenio-contenido.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'test', component: TestComponent},
    { path: 'test2', component: TestGSPAComponent},
    { path: 'creacion-contenido', component: CreacionContenidoComponent},
    { path: 'disenio-marca', component: DisenioMarcaComponent},
    { path: 'disenio-contenido', component: DisenioContenidoComponent},
    { path: 'website', component: WebsitesComponent}
];
