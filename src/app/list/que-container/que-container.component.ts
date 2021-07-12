import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QueApiService } from '../que-api.service';

@Component({
  selector: 'app-que-container',
  templateUrl: './que-container.component.html',
  styleUrls: ['./que-container.component.css']
})
export class QueContainerComponent implements OnInit, OnDestroy {

  msgLoader = "Loding, Please Wait ...";
  loaderColor= "#f03550";
  listLoaderColor= "#95f290";
  queList:any = [];
  isLoading = true;
  isList = false;
  isListLoading = false;
  sub:Subscription;
  queId = 0;
  searchWord = '';
  limit = 10;
  offset = 1;
  flagMore = true;
  constructor(private queApi: QueApiService, 
    private router: Router,
    private ar: ActivatedRoute, 
    private loc: Location) { 
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    const path = this.loc.path();
      const filter = this.ar.snapshot.queryParamMap.get('filter') || '';
      const limit = this.ar.snapshot.queryParamMap.get('limit') || this.limit +'';
      const offset = this.ar.snapshot.queryParamMap.get('offset')|| this.offset +'' ;
      const endPoint = this.getEndPoint(limit, offset, filter);
      this.fetchQuestions(endPoint);
  }

  getEndPoint(limit?: string, offset?: string, filter?:string) {
    let endPoint = '';
      if(limit){
        try {
          this.limit = parseInt(limit);
        } catch(ex) {
          console.log(ex);
          this.limit = 10;
        } finally {
          if (this.limit < 10) {
            this.limit = 10;
          }
        }
      } 
      endPoint = endPoint + '?limit=' + this.limit;
      if(offset){
        try {
          this.offset = parseInt(offset);
        } catch(ex) {
          console.log(ex);
          this.offset = 1;
        } finally {
          if (this.offset < 1) {
            this.offset = 1;
          }
        }
      } 
      endPoint = endPoint + '&offset=' + this.offset;
      if(filter){
        this.searchWord = filter;
        endPoint = endPoint + '&filter=' + filter;
      }
      return endPoint;
  }

  fetchwithSearchWrod(sw: string) {
    this.searchWord  =sw;
    const endPoint = this.getEndPoint('10', '1', sw);
    this.fetchQuestions(endPoint);
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  fetchQuestions(endPoint: string) {
    console.log("endPoint=" + endPoint);
    this.showListLoading();
    if(this.sub){
      this.sub.unsubscribe();
    }
    this.sub = this.queApi.getQueList(endPoint).subscribe(
      res => {
        // console.log(res.body);
        this.queList = res.body
        this.showList();
      },
      err => {
        console.log(err);
        this.queList = [];
        this.showList();
        this.flagMore = false;
      }
    );
  }

  handleNext() {
    this.offset = this.offset + this.limit;
    const endPoint = this.getEndPoint(this.limit + '', this.offset + '', this.searchWord);
    this.fetchQuestions(endPoint);
  }

  handlePre() {
    this.offset = this.offset - this.limit;
    const endPoint = this.getEndPoint(this.limit + '', this.offset + '', this.searchWord);
    this.fetchQuestions(endPoint);
  }

  showLoading() {
    this.isList=false;
    this.isListLoading=false;
    this.isLoading=true;
  }
  showListLoading() {
    this.isList=true;
    this.isLoading=false;
    this.isListLoading=true;
  }
  showList() {
    this.isLoading=false;
    this.isListLoading=false;
    this.isList=true;
  }
}
