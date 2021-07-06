import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ConstantsService } from '../config/constants.service';
import { Question } from './Question';

@Injectable({
  providedIn: 'root'
})
export class QueApiService {

  constructor(private http: HttpClient, 
    private constants: ConstantsService) { }

  getQueList(): Observable<HttpResponse<{status:number, body: Array<Question>}>> {
    let apiUrl = environment.api_url;
    let url = apiUrl + this.constants.QUE_LIST_EP;
    return this.http.get<{status:number,body: Array<Question>}>(url, {observe: 'response'}).pipe(retry(1)) ;
  }
}
