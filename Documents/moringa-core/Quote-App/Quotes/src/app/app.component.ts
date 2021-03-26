import { Component, OnInit } from '@angular/core';

interface Quote {
  quote: string;
  author: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loading: boolean = true;
  
  title = 'Quotes';
}
