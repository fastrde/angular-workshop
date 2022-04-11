import { Pipe, PipeTransform } from '@angular/core';
import {IBook} from "./book";
import {map, Observable} from "rxjs";

@Pipe({
  name: 'asyncBookfilter'
})
export class AsyncBookfilterPipe implements PipeTransform {

  transform(value: Observable<IBook[]>, filterString: string): Observable<IBook[]> {
    return value.pipe(map(books => books.filter((book) => book.title.toLocaleLowerCase().startsWith(filterString.toLocaleLowerCase()))));
  }
}
