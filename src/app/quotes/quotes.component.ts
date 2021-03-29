import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'Welcome to the Quote App';
  quotes:Quote[] = [
    new Quote (1,'The purpose of our lives is to be happy.','Dalai Lama.' ,new Date(2021,1,1),1,0),
    new Quote (2,'Life is what happens when you are busy making other plans.','John Lennon',new Date(2021,3,3),0,0),
    new Quote (3,'Get busy living or get busy dying.', 'Stephen King', new Date(2021,2,2),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }
  addedQuote(QuotesComponent: any){
    let arraysize = this.quotes.length;
    Quote.id = arraysize+1;
    Quote.completeDate = new Date(Quote.completeDate)

  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`This will delete your Quote`)
      if(toDelete){
        this.quotes.splice(index,1);
      }

    }
  }

  displayInfo(index: any){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
function Dateposted(arg0: number, arg1: number, arg2: number): string {
  throw new Error('Function not implemented.');
}

