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
  constructor(private queApi: QueApiService, 
    private router: Router,
    private ar: ActivatedRoute) { 
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.fetchQuestions();
  }

  fetchwithSearchWrod(sw: string) {
    this.searchWord  =sw;
    this.fetchQuestions();
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  fetchQuestions() {
    console.log("fetchQuestions");
    this.showListLoading();
    if(this.sub){
      this.sub.unsubscribe();
    }
    this.sub = this.queApi.getQueList(this.searchWord).subscribe(
      res => {
        console.log(res.body);
        this.queList = res.body
        this.showList();
      },
      err => {
        console.log(err);
        this.queList = [];
        this.showList();
      }
    );
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
