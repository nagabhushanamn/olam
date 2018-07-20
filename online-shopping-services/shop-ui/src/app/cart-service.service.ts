import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }

  addToCart(user, itemLine) {
    let apiUrl = `http://localhost:8081/cart/${user}`
    return this.http.post(apiUrl, itemLine);
  }
  getCart(user) {
    let apiUrl = `http://localhost:8081/cart/${user}`
    return this.http.get(apiUrl);
  }

}
