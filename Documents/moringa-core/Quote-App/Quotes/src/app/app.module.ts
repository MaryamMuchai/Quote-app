import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ThroughDirective } from './through.directive';
import { DateCountPipe } from './date-count.pipe';





@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailComponent,
    QuotesComponent,
    QuoteFormComponent,
    ThroughDirective,
    DateCountPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
