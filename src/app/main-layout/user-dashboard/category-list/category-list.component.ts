import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  categories: string[] = [];
  selectedCategory: string | null = null;

  @Output() categorySelected = new EventEmitter<string>();

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.getCategories().subscribe(
      {
        next: (categories) => this.categories = categories,
     }
    );
  }

  onCategoryClick(category: string): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
