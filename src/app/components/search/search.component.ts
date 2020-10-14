import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { SharedBooksService } from 'src/app/services/shared-books.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword = 'id';

  errorMsg: string;
  isLoadingResult: boolean;

  data$: Observable<any[]>

  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private router : Router,
    private sharedBook: SharedBooksService

  ) { }

  ngOnInit() {
  }

  //faz a requisição quando for digitado alguma coisa
  getServerResponse(event) {
    // console.log(event.toLowerCase())
    this.isLoadingResult = true;

    this.bookService.getBooks(event)
        .subscribe(
          data => {
            if (data) {
              console.log(data['items'])
              this.data$ = data['items']
              console.log(this.data$)
            } else {
              this.data$ = null
              console.log('null')
              this.errorMsg = "Livro não encontrado !"
            }
            this.isLoadingResult = false
          }
        )

  }

  searchCleared() {
    console.log('searchCleared');
    this.data$ = null 
    this.isLoadingResult = false
  
  }

  selectEvent(item) {
    console.log(item)
    this.sharedBook.insertBook(item)
    this.router.navigate(['home/info-book'])
    // do something with selected item
  }

  onChangeSearch(val: string) {
    console.log("trocado:" + val)
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
    console.log(e)
  }


}
