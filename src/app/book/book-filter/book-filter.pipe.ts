import { Pipe, PipeTransform } from '@angular/core';
import {IBook} from "../book";

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: IBook[] | null, filterString: string): IBook[] {
    if (value == null) return []
    return value.filter((book) => book.title.toLocaleLowerCase().startsWith(filterString.toLocaleLowerCase()));
  }
}
