import { createReducer,on } from "@ngrx/store";
import { AddBook,RemoveBook,AddBookSuccess,AddBookFailure } from "./book.action";
import { Book } from "../models/book";
import { startWith } from "rxjs";
import { state } from "@angular/animations";

export const initialState: Book[] = [];

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, {id,title,author}) => {return state}),
  on(AddBookSuccess, (state, {id,title,author}) => [...state, {id,title,author}]),
  on(AddBookFailure,(state,{error}) => {
    console.log(error);
    return state;
  }),
  on(RemoveBook, (state,{bookId}) => state.filter(book => book.id !== bookId))
);
