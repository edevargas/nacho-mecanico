import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MechanicServicePageComponent } from '../../pages/mechanic-service-page/mechanic-service-page.component';
import { MechanicsPageComponent } from '../../pages/mechanics-page/mechanics-page.component';
import { ServicesByMechanicsPageComponent } from '../../pages/services-by-mechanics-page/services-by-mechanics-page.component';



const appRoutes: Routes = [
  { path: '', component: MechanicServicePageComponent },
  { path: 'mechanics', component: MechanicsPageComponent },
  { path: 'services/:mechanicId', component: ServicesByMechanicsPageComponent },
  { path: '**', redirectTo: '/' },
  ];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
