import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesPageComponent } from '../../pages/our-services-page/our-services-page.component';
import { ContactPageComponent } from '../../pages/contact-page/contact-page.component';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: '', component: OurServicesPageComponent },
  { path: 'services', component: OurServicesPageComponent },
  { path: 'contact', component: ContactPageComponent },
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
