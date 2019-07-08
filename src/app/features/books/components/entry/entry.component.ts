import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import * as booksActions from '../../actions/books.actions';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(title: HTMLInputElement, author: HTMLInputElement, format: HTMLInputElement) {
    const description = title.value + ', Author: ' + author.value + ', Format: ' + format.value;
    this.store.dispatch(booksActions.addNewBook({ description }));
    title.value = '';
    author.value = '';
    format.value = '';
    title.focus();
  }
}
