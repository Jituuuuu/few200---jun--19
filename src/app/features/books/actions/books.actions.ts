import { createAction, props } from '@ngrx/store';

let bookId = 0;

export const addNewBook = createAction(
  '[books/list] book added',
  ({ description }: { description: string }) => {
    return {
      entity: {
        id: 'TEMP-' + bookId++,
        description
      }
    };
  });
