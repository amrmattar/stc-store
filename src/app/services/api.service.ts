import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_BASE_URL: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(`${this.API_BASE_URL}/categories`);
  }

  getProducts(category?: string): Observable<any> {
    const url = category?`${this.API_BASE_URL}/category/${category}`:`${this.API_BASE_URL}`;
    return this.http.get(url);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}`, product)
  }

  updateProduct(product: any, id: any): Observable<any> {
    return this.http.put(`${this.API_BASE_URL}/${id}`, product)
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.API_BASE_URL}/${id}`);
  }
}
