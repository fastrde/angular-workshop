import {Component, OnDestroy, OnInit} from '@angular/core';
import {IBook} from "./book";
import {BookApiService} from "./book-api.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  bookSearchTerm = '';

  books$: Observable<IBook[]>

  constructor(private bookApi: BookApiService) {
    this.books$ = this.bookApi.getAll()
  }

  goToBookDetails(book: IBook){
    console.log("Greetings from the App-Component")
    console.log(book);
  }

  updateBookSearchTerm(event: Event){
    const inputField = event.target as HTMLInputElement
    this.bookSearchTerm = inputField.value
  }
}
