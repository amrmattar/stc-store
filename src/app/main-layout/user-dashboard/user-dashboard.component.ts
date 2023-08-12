import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent {
  selectedCategory: string | null = null;
  products: any[] = [];
  loading = false;

  constructor(private apiService: ApiService) {}

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
    this.loadProducts();
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.apiService.getProducts(this.selectedCategory).subscribe(
      {
        next: (products) => {
          this.products = products;
          this.loading = false;
        },
      }
    );
  }

}

