import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {emptyBook, IBook} from "../book";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  customStyle = {
    color: 'red'
  }
  @Input() content: IBook = emptyBook
  @Output() detailClick = new EventEmitter<IBook>();

  constructor() { }

  ngOnInit(): void {}

  handleDetailClick(eventArgs: MouseEvent) {
    this.detailClick.emit(this.content)
  }
}
