import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QueApiService } from '../que-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  msgLoader = "Loding, Please Wait ...";
  listLoaderColor= "#95f290";
  question:any = {};
  isDetails = false;
  isDetailsLoading = false;
  sub:Subscription;
  queId = 0;
  
  constructor(private router: Router, 
    private ar: ActivatedRoute, private queApi: QueApiService) {
      this.sub = new Subscription();
     }
  
  ngOnInit(): void {
      this.sub = this.ar.params.subscribe(
      params =>  {
        this.queId = parseInt(params['id'] || 0);
        console.log(this.queId);

        if (this.queId > 0) {
          this.fetchQuestion(this.queId);
        } else {
          // alert('zeor');
        }
      }
    )
  }

  handleBack() {
    this.router.navigate(['questions']);
  }
  handleShare() {
    alert('zeor');
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  fetchQuestion(queId:number) {
    console.log("fetchQuestions");
    this.showDetailsLoading();
    if(this.sub){
      this.sub.unsubscribe();
    }
    this.sub = this.queApi.getQueDetails(queId).subscribe(
      res => {
        console.log(res.body);
        this.question = res.body
        this.showDetails();
      },
      err => {
        console.log(err);
        this.question = {};
        this.showDetails();
      }
    );
  }

  showDetailsLoading() {
    this.isDetails=false;
    this.isDetailsLoading=true;
  }
  showDetails() {
    this.isDetailsLoading=false;
    this.isDetails=true;
  }


}
