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

  getQueList(endPoint: string): Observable<HttpResponse<{status:number, body: Array<Question>}>> {
    let apiUrl = environment.api_url;
    let url = apiUrl + this.constants.QUE_LIST_EP;
    if(endPoint) {
      url = url + endPoint;
    }
    return this.http.get<{status:number,body: Array<Question>}>(url, {observe: 'response'}).pipe(retry(1)) ;
  }

  getQueDetails(id:number): Observable<HttpResponse<{status:number, body: Question}>> {
    let apiUrl = environment.api_url;
    let url = apiUrl + this.constants.QUE_LIST_EP;
    if(id && typeof id === 'number' && id > 0) {
      url = url + "/" + id;
    } else {
      url = url + "/0";
    }
    return this.http.get<{status:number,body: Question}>(url, {observe: 'response'}).pipe(retry(1)) ;
  }

  putVote(id:number, reqBody: {}): Observable<HttpResponse<{status:number, body: any}>> {
    let apiUrl = environment.api_url;
    let url = apiUrl + this.constants.QUE_LIST_EP;
    if(id && typeof id === 'number' && id > 0) {
      url = url + "/" + id;
    } else {
      url = url + "/0";
    }
    return this.http.put<{status:number, body: any}>(url, reqBody, {observe: 'response'}) ;
  }

  postShare(reqBody: {destination_email: string, content_url: string}): Observable<HttpResponse<{status:number, body: any}>> {
    let apiUrl = environment.api_url;
    let url = apiUrl + this.constants.SHARE_EP;
    return this.http.post<{status:number, body: any}>(url, reqBody, {observe: 'response'}) ;
  }

}
