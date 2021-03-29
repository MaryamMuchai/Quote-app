import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input()
  quots!: Quote;
  @Output() isRead = new EventEmitter<boolean>();
  deleteQuote(read:boolean){
    this.isRead.emit(read);
  }
  downvote(){
    this.quots.downvote+=1;
  }
  upvote(){
    this.quots.upvote+=1;
  }
  constructor() { }

  ngOnInit() {
  }

}