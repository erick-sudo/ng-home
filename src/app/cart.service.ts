import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: Array<Product> = [];


  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Array<Product> {
    return this.items
  }

  clearCart(): Array<Product> {
    this.items = [];
    return this.items
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
