import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { QueApiService } from '../que-api.service';
import Swal from 'sweetalert2';

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
  subVoating:Subscription;
  subShare:Subscription;
  queId = 0;
  
  constructor(private router: Router, 
    private ar: ActivatedRoute, private queApi: QueApiService) {
      this.sub = new Subscription();
      this.subVoating = new Subscription();
      this.subShare = new Subscription();
     }
  
  ngOnInit(): void {
      this.sub = this.ar.params.subscribe(
      params =>  {
        this.queId = parseInt(params['id'] || 0);
        if (this.queId > 0) {
          this.fetchQuestion(this.queId);
        } else {
          //yet to implement 
          // console.log('zeor or other');
        }
      }
    );
  }

  handleBack() {
    this.router.navigate(['questions']);
  }
  handleShare() {
    let url = window.location.href;
    // let email = prompt('Enter you email to share ' + url);
    Swal.fire({
      title: 'Enter email ID to share ' + url,
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      backdrop: true,
      confirmButtonText: 'Share',
      showLoaderOnConfirm: true,
      preConfirm: (email) => {
        if (email && email.trim() !== '') {
          if(this.isEmail(email)){
            return email
          } else {
            Swal.fire('Please enter valid email ID','', 'error');
          }
        } else {
          Swal.fire('Please enter email ID','', 'error');
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      const payload = {destination_email: result.value, content_url: url};
      // API call
      this.postShare(payload);
    })
  }

  handleVoating(choice: {votes:number, choice: string}) {
    let choices = this.question.choices;
    choices.map( (c:{votes:number, choice: string}) => {
      if (c.choice == choice.choice){
        c.votes = choice.votes;
        return c;
      } else {
        return c;
      }
    });
    // console.log("****** " ,this.question);
    this.subVoating = this.queApi.putVote(this.queId, this.question).subscribe(
      res => {
        if (res.status === 201) {
          // Mock API is not actually change the votes
          this.question = res.body;
        } else {
          // yet to finish 
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  postShare(payload: {destination_email: string, content_url: string}) {
    this.subVoating = this.queApi.postShare(payload).subscribe(
      res => {
        if (res.status === 200) {
          Swal.fire('Shared Successfully','', 'success');
        } else {
          Swal.fire('NOT Shared, please try again.','', 'error');
        }
      },
      err => {
        Swal.fire('NOT Shared, please try again.' + err,'', 'error');
      }
    );
  }

  isEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
    if(this.subVoating){
      this.subVoating.unsubscribe();
    }
    if(this.subShare){
      this.subShare.unsubscribe();
    }
  }

  fetchQuestion(queId:number) {
    // console.log("fetchQuestions");
    this.showDetailsLoading();
    if(this.sub){
      this.sub.unsubscribe();
    }
    this.sub = this.queApi.getQueDetails(queId).subscribe(
      res => {
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
