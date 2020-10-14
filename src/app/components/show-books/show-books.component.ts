import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedBooksService } from 'src/app/services/shared-books.service';
import { Books } from 'src/app/interface/books';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.css']
})
export class ShowBooksComponent implements OnInit {

  books: any = []
  constructor(
    private sharedBook: SharedBooksService
  ) { }

  ngOnInit(): void {

    this.sharedBook.book$.subscribe(
      dados => {
        this.books.shift()
        this.books.push(dados)
        console.log(this.books)
      }
    )

  }
}
