import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MechanicServicesDetailComponent } from './layouts/mechanic-services/mechanic-services-detail/mechanic-services-detail.component';
import { MechanicServicesListComponent } from './layouts/mechanic-services/mechanic-services-list/mechanic-services-list.component';
import { ToolbarComponent } from './layouts/toolbar/toolbar.component';
import { SidenavComponent } from './templates/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MechanicServicesDetailComponent,
    MechanicServicesListComponent,
    ToolbarComponent,
    SidenavComponent],
  exports: [
    MechanicServicesDetailComponent,
    MechanicServicesListComponent,
    ToolbarComponent,
    SidenavComponent]
})
export class CommonUiModule {}
