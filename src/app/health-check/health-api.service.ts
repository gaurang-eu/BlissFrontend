import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ConstantsService } from '../config/constants.service';
import { Health } from './Health';

@Injectable({
  providedIn: 'root'
})
export class HealthApiService {

  constructor(private http: HttpClient, 
    private constants: ConstantsService) { }

  getHelthCheck(): Observable<HttpResponse<{status:number, body:Health}>> {
    let apiUrl = environment.api_url;
    let url = apiUrl + this.constants.HEALTH_CHECK_EP;
    return this.http.get<{status:number,body:Health}>(url, {observe: 'response'}).pipe(retry(1)) ;
  }
}
