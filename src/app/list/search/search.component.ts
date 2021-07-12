import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchWord = '';
  placeHolder = 'Enter search word';

  @Output() search:EventEmitter<string> = new EventEmitter();
  
  @ViewChild('inputsw', {static: true}) inputsw: any;

  constructor() { }

  handleGo() {
    if (this.searchWord && this.searchWord.length > 2) {
      this.search.emit(this.searchWord);
      this.inputsw.nativeElement.style.backgroundColor ="white";
    } else {
      this.inputsw.nativeElement.style.backgroundColor ="#f3f454";
      Swal.fire('Please enter minimum 3 letters','', 'error');
    }
  }

  ngOnInit(): void {

  }

}
