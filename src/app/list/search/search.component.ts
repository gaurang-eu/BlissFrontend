import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() searchWord = '';
  placeHolder = 'Enter search word';

  @Output() search:EventEmitter<string> = new EventEmitter();
  constructor() { }

  handleGo() {
    if (this.searchWord && this.searchWord.length > 3) {
      this.search.emit(this.searchWord);
    } else {
      alert("3 chars");
    }
    
  }

  ngOnInit(): void {

  }

}
