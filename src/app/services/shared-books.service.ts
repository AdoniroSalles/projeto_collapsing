import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Books } from '../interface/books';

@Injectable({
  providedIn: 'root'
})
export class SharedBooksService {

  constructor() { }
  
  private book = new Subject<Books>()


  book$ = this.book.asObservable()

  insertBook(book: Books){
    this.book.next(book)
  }

  cleanBook(){
    this.book.next()
  }
}
