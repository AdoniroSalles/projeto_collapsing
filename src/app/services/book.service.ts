import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Books } from '../interface/books';

const API_URL = environment.URL_LOCAL

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient
  ) { }

  getBooks(book: string){
    return this.http.get<Books[]>(`${API_URL}allbooks/` + book)
  }

}
