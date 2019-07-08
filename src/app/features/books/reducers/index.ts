import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooksReducer from './books.reducer';

export const featureName = 'books';
import { BooksItem } from '../models';

export interface State {
  books: fromBooksReducer.BooksState;
}

export const reducers = {
  books: fromBooksReducer.reducer
};

const selectFeature = createFeatureSelector<State>(featureName);
const selectBooksBranch = createSelector(selectFeature, f => f.books);
const { selectAll: selectAllBooksEntities } = fromBooksReducer.adapter.getSelectors(selectBooksBranch);
export const selectBooksItems = createSelector(selectAllBooksEntities, s => s as BooksItem[]);
