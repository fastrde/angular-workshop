import { Injectable } from '@angular/core';
import {IBook} from "./book";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  private books: IBook[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: "How to Win Friends and Influence ..."
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...'
    },
    {
      author: 'Simon Snack',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ..."
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHaT?',
      abstract: "START WITH WHaT Whaaaat? ..."
    }
  ];
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IBook[]>{
    return this.httpClient.get<IBook[]>("http://localhost:4730/books")
  }
}
