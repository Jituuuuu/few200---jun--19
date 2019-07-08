import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/books.actions';


export interface BooksEntity {
  id: string;
  description: string;
}

export interface BooksState extends EntityState<BooksEntity> {

}


export const initialBooksState: BooksState = {
  ids: ['Item0'],
  entities: {
    Item0: {
      id: 'Item0',
      description: 'ABC, Author: John Smith, Format: E-Book'
    }
  }
};

export const adapter = createEntityAdapter<BooksEntity>();

export const reducer = createReducer(
  initialBooksState,
  on(actions.addNewBook, (state, { entity }) => adapter.addOne(entity, state))
);
