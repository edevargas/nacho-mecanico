import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MechanicService } from '@dev/api-interfaces';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MechanicServicesService {

  model = 'mechanic-services';

  constructor(private http: HttpClient, @Inject("apiUrl") private apiUrl: string) {}

  all() {
    return this.http.get<MechanicService[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<MechanicService>(this.getUrlWithId(id));
  }

  create(mechanicService: MechanicService) {
    return this.http.post(this.getUrl(), mechanicService);
  }

  update(mechanicService: MechanicService) {
    if(!mechanicService.id) return throwError(() => "El servicio no contiene id válido");
    return this.http.put(this.getUrlWithId(mechanicService.id), mechanicService);
  }

  delete(mechanicService: MechanicService) {
    if(!mechanicService.id) return throwError(() => "El servicio no contiene id válido");
    return this.http.delete(this.getUrlWithId(mechanicService.id));
  }

  private getUrl() {
    return `${this.apiUrl}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }
}
