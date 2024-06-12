import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import * as bookActions from './book.action';
import { BookService } from "./book.service";
import { mergeMap,map,catchError,of } from "rxjs";
@Injectable()

export class BookEffects {
  //Mỗi lần action AddBook trong chương trình được gọi, thì thực thi
  addBook$ = createEffect(() => this.actions$.pipe(
    // Listen for actions of type 'AddBook'
    ofType(bookActions.AddBook),
    mergeMap((action) => this.bookService.addBook(action)
    .pipe(
      map(book => bookActions.AddBookSuccess(book)),
      catchError((error) => of(bookActions.AddBookFailure({error})))
    ))
  ));
  constructor(
    private actions$: Actions,
    private bookService: BookService
  ){}

}
