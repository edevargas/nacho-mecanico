import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MechanicService } from '@dev/api-interfaces';
import { finalize, map, Subject } from 'rxjs';
import { MechanicServicesService } from '../services';

@Injectable({
  providedIn: 'root'
})
export class MechanicServicesFacadeService {

  allMechanicServices$ = new Subject<MechanicService[]>();
  selectedService$ = new Subject<MechanicService>();
  error$ = new Subject<string | null>();
  loading$ = new Subject<boolean>();
  mutations$ = new Subject<boolean>();

  constructor(private mechanicServicesService: MechanicServicesService,
    private _snackBar: MatSnackBar) { }

  getAllServices() {
    this.initOp();
    this.mechanicServicesService.all()
    .pipe(finalize(() => this.loading$.next(false)))
    .subscribe({
      next: services => this.allMechanicServices$.next(services),
      error: () => this.handleError("No se pudieron obtener los servicios de Nacho Mecánico")
    });
  }

  selectService(service: MechanicService | null) {
    this.selectedService$.next({...service});
  }

  deleteService(service: MechanicService) {
    this.initOp();
    this.mechanicServicesService.delete(service)
    .pipe(finalize(() => this.loading$.next(false)))
    .subscribe({
      next: () => this.mutations$.next(true),
      error: () => this.handleError("No se pudo eliminar el servicio.")
    });
  }

  save(service?: MechanicService) {
    if(!service) return;
    this.initOp();
    if(service.id)
      this.mechanicServicesService.update(service)
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe({
        next: () => this.mutations$.next(true),
        error: () => this.handleError("Error al actualizar servicio.")
      });
    else
      this.mechanicServicesService.create(service)
      .pipe(finalize(() => this.loading$.next(false)))
      .subscribe({
        next: () => this.mutations$.next(true),
        error: () => this.handleError("Error al crear nuevo servicio.")
      });
  }

  resetSelectedService() {
    this.selectedService$.next({});
  }

  handleError(error: string) {
    this.error$.next(error);
    this.openSnackBar(error, "Cerrar");
  }

  initOp() {
    this.loading$.next(true);
    this.error$.next(null);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
