import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BooksItem } from './models';
import { State, selectBooksItems } from './reducers';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  items$: Observable<BooksItem[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectBooksItems);
  }

}
